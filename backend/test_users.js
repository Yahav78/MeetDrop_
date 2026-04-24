async function testUsersAPI() {
  // Use a timestamp to ensure unique usernames for each test run
  const timestamp = Date.now();
  const headers = { 'Content-Type': 'application/json' };

  // Helper function to create a test user and return their ID and Token
  const createUser = async (userKey) => {
    const username = `qa_${userKey}_${timestamp}`;
    await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST', headers,
      body: JSON.stringify({ 
        username, 
        email: `${username}@test.com`, 
        password: 'password123', 
        name: `QA ${userKey}` 
      })
    });
    
    const loginRes = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST', headers,
      body: JSON.stringify({ username, password: 'password123' })
    });
    
    const data = await loginRes.json();
    return { user: data.user, token: data.token };
  };

  try {
    console.log('--- Setting up QA Users ---');
    const userA = await createUser('Alice');
    const userB = await createUser('Bob');
    console.log(`Created User A: ${userA.user._id}`);
    console.log(`Created User B: ${userB.user._id}`);

    // Auth headers for protected routes
    const authHeaders = { 
      ...headers, 
      'Authorization': `Bearer ${userA.token}` 
    };

    console.log('\n--- 1. Fetch Profile ---');
    let res = await fetch(`http://localhost:5000/api/users/${userA.user._id}`, { headers: authHeaders });
    let data = await res.json();
    console.log('Fetch Profile Success:', data._id === userA.user._id);

    console.log('\n--- 2. Update Profile ---');
    res = await fetch(`http://localhost:5000/api/users/${userA.user._id}`, {
      method: 'PUT', headers: authHeaders,
      body: JSON.stringify({ bio: 'Automated QA Tester', jobTitle: 'Senior QA' })
    });
    data = await res.json();
    console.log('Update Profile Success:', data.bio === 'Automated QA Tester');

    console.log('\n--- 3. Add Favorite ---');
    res = await fetch(`http://localhost:5000/api/users/${userA.user._id}/favorites/${userB.user._id}`, {
      method: 'POST', headers: authHeaders
    });
    data = await res.json();
    console.log('Add Favorite Success:', data.favorites.includes(userB.user._id));

    console.log('\n--- 4. Remove Favorite ---');
    res = await fetch(`http://localhost:5000/api/users/${userA.user._id}/favorites/${userB.user._id}`, {
      method: 'DELETE', headers: authHeaders
    });
    data = await res.json();
    console.log('Remove Favorite Success:', !data.favorites.includes(userB.user._id));

    console.log('\n--- 5. Hide Connection ---');
    res = await fetch(`http://localhost:5000/api/users/${userA.user._id}/history/hide/${userB.user._id}`, {
      method: 'POST', headers: authHeaders
    });
    data = await res.json();
    console.log('Hide Connection Success:', data.hiddenConnections.includes(userB.user._id));

    console.log('\n--- 6. Fetch History ---');
    res = await fetch(`http://localhost:5000/api/users/${userA.user._id}/history`, { headers: authHeaders });
    data = await res.json();
    // Checks if the API successfully returns an array
    console.log('Fetch History Success:', Array.isArray(data));

    console.log('\n✅ All User API Tests Completed Successfully!');
  } catch (err) {
    console.error('❌ Test script failed:', err.message);
  }
}

testUsersAPI();
