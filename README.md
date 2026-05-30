# 🚀 MeetDrop
<img width="1340" height="747" alt="image" src="https://github.com/user-attachments/assets/2f2e2e5a-f0ac-4b3e-8543-89aad3a709d3" />

## 🔗 Links
### 📊 Project Management: https://meetdrop.atlassian.net/jira/software/projects/MD/boards/1
### 🌍 Live Application: https://meetdrop-app-pearl.vercel.app/
---
## 🌟 About The Project
**MeetDrop** is a modern web application designed to revolutionize professional networking. 🤝💼

In today’s digital age, exchanging physical business cards is outdated and inefficient.   
MeetDrop provides a centralized and seamless platform where users can create their **digital networking identity**, share professional details, and manage their interaction history and favorites — all in one place. 
---
## 👨‍💻 Team Members
- 👨‍💻 **Yahav Vituri** – 211521554 – Lead Developer  
- 📌 **Dolev Atik** – 206576555 – Product Owner  
- 📋 **Teddy Boliasny** – 315995498 – Scrum Master  
- 💻 **Larry Urevich** – 209045301 – Fullstack Developer  
- 🧪 **Nave Dan** – 319045753 – QA  
- ☁️ **Aviad Gabay** – 314724436 – DevOps  
---

## 🛠️ Tech Stack Details

### 🎨 Frontend
- ⚛️ React.js *(Bootstrapped with Vite for optimized builds)*  
- 🧭 React Router DOM *(Client-side routing)*  
- 🎨 CSS3 / HTML5  

### ⚙️ Backend & Security
- 🟢 Node.js & Express.js *(RESTful API architecture)*  
- 🔐 JSON Web Tokens (JWT) *(Stateless authentication)*  
- 🔒 Bcrypt *(Password hashing)*  

### 🗄️ Database & Deployment
- 🍃 MongoDB & Mongoose *(Object Data Modeling)*  
- ▲ Vercel *(CI/CD Automated Deployment)*  

The system is built as a **Full-Stack application** featuring:
- 🎨 Responsive User Interface (UI)
- ⚙️ Robust Backend Server
- 🔒 Secure Database
---

## 🔑 Environment Variables

To run this project locally, add the following variables to your `.env` files.

### ⚙️ Backend (`/api/.env`)
- `MONGO_URI` – Your MongoDB connection string 🍃  
- `JWT_SECRET` – Secret key for signing JWT tokens 🔐  
- `PORT` – Server port (e.g. `(http://localhost:5000)`) 🌐  

### 🎨 Frontend (`/frontend/.env`)
- `PORT` – Server port (e.g. `(http://localhost:5173)`) 🌐 
<img width="1600" height="416" alt="image" src="https://github.com/user-attachments/assets/97ff482f-db4b-42f2-92d4-80d960317809" />
---

## 📥 Installation Guide

### 1️⃣ Prerequisites
Make sure you have the following installed:
- 🟢 Node.js  
- 🍃 MongoDB Cluster  

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/MeetDrop/MeetDrop_.git
cd MeetDrop_
```

### 3️⃣ Backend Setup
```bash
cd api
npm install
node server.js
```

### 4️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 📖 How to Use (End-User Guide)
Welcome to MeetDrop! Here is how to navigate the "Golden Path" of our application:

1. **Register / Login:** Create a secure account or log in using your credentials.
2. **Digital Card:** View and manage your personal digital networking card.
3. **Matchmaker Radar:** Head over to the Radar to find active professionals around you.
4. **Exchange Cards:** Send a connection request to exchange digital cards securely.
5. **History & Favorites:** Access your History view to manage past connections, save favorites, or hide specific interactions.

---

## 🧪 Running Tests (For QA & Developers)
We built an automated E2E testing suite to ensure API stability. To run the tests locally:

1. Ensure the Backend server is running (`node api/server.js`).
2. Open a new terminal and navigate to the `backend` folder.
3. Run the auth and user integration tests:
```bash
cd backend
node test_auth.js
node test_users.js
```





