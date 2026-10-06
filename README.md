# Full-Stack MERN Web Application

A complete full-stack web application developed using the MERN stack (MongoDB, Express.js, React, Node.js). The project is structured as a monorepo containing both the frontend client and the backend API server.

---

## 🔗 Live Application & Links

- **Live Application:** [https://internshala-final-mern.vercel.app](https://internshala-final-mern.vercel.app)
- **GitHub Repository:** [https://github.com/Mrigendra2511/internshala-final-mern](https://github.com/Mrigendra2511/internshala-final-mern)

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** React.js, HTML5, CSS3, JavaScript (ES6+), Axios
  - *Hosting Platform:* Vercel
- **Backend:** Node.js, Express.js, RESTful API
  - *Hosting Platform:* Render
- **Database:** MongoDB Atlas (Mongoose ORM)

---

## 📂 Repository Structure

```text
internshala-final-mern/
├── backend/            # Express server & API routes
│   ├── config/         # Database configuration
│   ├── controllers/    # Route controllers
│   ├── models/         # Mongoose schemas
│   ├── routes/         # Express routes
│   └── package.json
└── frontend/           # React user interface
    ├── src/            # React components & pages
    ├── public/         # Static files
    └── package.json
