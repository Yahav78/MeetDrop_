# 🚀 MeetDrop
<img width="1340" height="747" alt="image" src="https://github.com/user-attachments/assets/2f2e2e5a-f0ac-4b3e-8543-89aad3a709d3" />

## 🔗 Links
* **📊 Project Management (Jira):** https://meetdrop.atlassian.net/jira/software/projects/MD/boards/1
* **🌍 Live Application:** https://meetdrop-app-pearl.vercel.app/

---

## 🌟 About The Project
**MeetDrop** is a modern, privacy-conscious web application designed to revolutionize professional networking and event management. 🤝💼

In today’s digital age, exchanging physical business cards is outdated, inefficient, and hard to track. MeetDrop provides a centralized, seamless platform where users can create their **digital networking identity**, share professional details via proximity, and manage their interaction history. Beyond 1-on-1 interactions, the platform features a robust **Event Management System** allowing administrators to organize conferences and attendees to seamlessly join via a 1-Click Event Connect.

---

## 👨‍💻 Team Members
* 💻 **Larry Urevich** – 209045301 – Full Stack Developer
* ⚙️ **Yahav Vituri** – 211521554 – Lead Developer
* 📌 **Dolev Atik** – 206576555 – Product Owner
* 📋 **Teddy Boliasny** – 315995498 – Scrum Master
* 🧪 **Nave Dan** – 319045753 –  QA
* ☁️ **Aviad Gabay** – 314724436 – DevOps Lead

---

## 🛠️ Tech Stack & Architecture

### 🎨 Frontend
* ⚛️ **React 18** *(Bootstrapped with Vite for optimized builds)*
* 🌊 **Tailwind CSS** *(Modern UI overhaul with Dark Mode support)*
* 🧭 **React Router DOM** *(Client-side routing)*

### ⚙️ Backend & Security
* 🟢 **Node.js & Express.js** *(RESTful API architecture)*
* 🔐 **JSON Web Tokens (JWT)** *(Stateless authentication & HTTP-only protection)*
* 🔒 **Bcrypt** *(Password hashing & Web Crypto)*

### 🗄️ Database & Deployment
* 🍃 **MongoDB** *(NoSQL document schemas for flexible profiles and event logs)*
* ▲ **Vercel** *(Serverless API functions & Frontend hosting)*
* 🤖 **GitHub Actions** *(Automated CI/CD pipeline enforcing strict DoD gates)*

---

## 📖 Key Features & The "Golden Path"

Welcome to MeetDrop! Here is how to navigate the core features of our application:

1. **Secure Authentication:** Register or log in securely, including Google SSO integration.
2. **Digital Card:** View, edit, and manage your personal digital networking card.
3. **Match Confirmation Flow:** Discover nearby active professionals and interact using pre-defined messaging.
4. **Event Discovery & Check-in:** Browse upcoming events and join instantly using the **1-Click Event Connect**.
5. **Connection Network Search:** Access your History view with advanced server-side filtering to manage past connections, save favorites, or hide specific interactions.
6. **Organizer Dashboard:** Admin Role-Based Access Control (RBAC) for creating and managing large-scale events.

---

## 🔑 Environment Variables

To run this project locally, add the following variables to your `.env` files.

### ⚙️ Backend (`/api/.env`)
* `MONGO_URI` – Your MongoDB connection string 🍃
* `JWT_SECRET` – Secret key for signing JWT tokens 🔐
* `PORT` – Server port (e.g., `5000`) 🌐

### 🎨 Frontend (`/frontend/.env`)
* `PORT` – Server port (e.g., `5173`) 🌐
* `VITE_API_URL` – Backend API endpoint 🔌

<img width="1600" height="416" alt="image" src="https://github.com/user-attachments/assets/97ff482f-db4b-42f2-92d4-80d960317809" />

---

## 📥 Installation Guide

### 1️⃣ Prerequisites
Make sure you have the following installed:
* 🟢 Node.js (v20+)
* 🍃 MongoDB Cluster (or local instance)

### 2️⃣ Clone the Repository
```bash
git clone [https://github.com/Yahav78/MeetDrop_.git](https://github.com/Yahav78/MeetDrop_.git)
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





