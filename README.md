# MeetDrop 

## About The Project
MeetDrop is a modern web application designed to revolutionize professional networking. In the digital age, exchanging physical business cards is outdated and inefficient. MeetDrop provides a centralized, seamless platform for users to create a digital network identity, share professional details, and manage their interaction history and favorites all in one place. 

The system is built as a Full-Stack application featuring a responsive User Interface (UI), a robust Backend server, and a secure Database.

## Team Members
* Yahav Vituri - 211521554 - Lead Developer
* Dolev Atik - 206576555 - Product Owner
* Teddy Boliasny - 315995498 - Scrum Master
* Larry Urevich - 209045301 - Fullstack Developer
* Nave Dan - 319045753 - QA
* Aviad Gabay - 314724436 - Devops

## Tech Stack Details
**Frontend:**
* React.js (Bootstrapped with Vite for optimized builds)
* React Router DOM (Client-side routing)
* CSS3 / HTML5

**Backend & Security:**
* Node.js & Express.js (RESTful API architecture)
* JSON Web Tokens (JWT) for stateless authentication
* Bcrypt for password hashing

**Database & Deployment:**
* MongoDB & Mongoose (Object Data Modeling)
* Vercel (CI/CD Automated Deployment)

## Environment Variables
To run this project locally, you will need to add the following environment variables to your `.env` files.

**Backend (`/api/.env`):**
* `MONGO_URI` - Your MongoDB connection string.
* `JWT_SECRET` - A secret key for signing JSON Web Tokens.
* `PORT` - The port the server will run on (e.g., 5000).

**Frontend (`/frontend/.env`):**
* `VITE_API_URL` - The URL of the backend server (e.g., `http://localhost:5000`).

## Installation Guide
Follow these steps to set up the project locally.

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed and access to a MongoDB cluster.

### 2. Clone the Repository
git clone [https://github.com/MeetDrop/MeetDrop_.git](https://github.com/MeetDrop/MeetDrop_.git)
cd MeetDrop_
3. Backend Setup
Navigate to the API directory, install dependencies, and start the server:
cd api
npm install
# Ensure your .env file is set up here
npm run dev
4. Frontend Setup
Open a new terminal, navigate to the frontend directory, install dependencies, and start the Vite development server:
cd frontend
npm install
# Ensure your .env file is set up here
npm run dev

Links
Project Management: https://meetdrop.atlassian.net/jira/software/projects/MD/boards/1

Live Application: meetdrop-app-pearl.vercel.app

<img width="1600" height="416" alt="WhatsApp Image 2026-04-24 at 14 45 47" src="https://github.com/user-attachments/assets/fbe5f0b6-c240-47ff-a44a-2bb3a9afd606" />

