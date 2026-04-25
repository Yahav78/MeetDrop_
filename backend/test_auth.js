async function testAuthFlow() {
  
  try {
    console.log('--- Registering User 1 ---');
    let res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: "testuser1",
        firstName: "Test",
        lastName: "User",
        email: "test@example.com",
        password: "password123"
    })
    });
    console.log(await res.json());

    console.log('\n--- Logging in User 1 ---');
    res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'testuser1', password: 'password123' }) 
    });
    const loginData = await res.json();
    console.log('Login success:', !!loginData.token);
    
    console.log('\n--- Admin Login ---');
    res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: '211521554', password: 'yv787878' })
    });
    const adminData = await res.json();
    console.log('Admin login success:', !!adminData.token, 'isAdmin:', adminData.isAdmin);

    console.log('\n--- Admin Fetch Users ---');
    res = await fetch('http://localhost:5000/api/admin/users', {
      method: 'GET',
      headers: { 
        'Authorization': `Bearer ${adminData.token}` 
      }
    });
    const users = await res.json();
    console.log(`Found ${users.length} users in DB.`);
    
  } catch (e) {
    console.error('Test script failed:', e.message);
  }
}

testAuthFlow();
