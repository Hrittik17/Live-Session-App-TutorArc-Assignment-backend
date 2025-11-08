# ⚙️ BACKEND README — `Live-Session-Backend`

```markdown
# 🎬 Live Session Backend (TutorArc Assignment)

This is the **backend API** for the **TutorArc Live Session App**, built with Node.js and Express.  
It manages live session creation, storage, and validation using MongoDB.

---

## 🛠️ Tech Stack

- 🟢 Node.js
- 🚀 Express.js
- 🍃 MongoDB with Mongoose
- 🧩 UUID for unique session IDs
- 🧠 dotenv for environment config
- 🧾 Morgan for logging
- 🔓 CORS for cross-origin requests

---

## 📁 Folder Structure

backend/
┣ models/
┃ ┗ liveSessionSchema.js
┣ controllers/
┃ ┗ sessionsControllers.js
┣ routes/
┃ ┗ sessionRoutes.js
┣ server.js
┣ package.json
┗ README.md



---

## ⚙️ Features

- ✅ Create new live sessions (for admin)
- ✅ Generate a unique session ID and URL
- ✅ Validate existing sessions (for student)
- ✅ Store sessions in MongoDB with timestamps
- ✅ Secure CORS setup for frontend connection

---

## ⚙️ API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `POST` | `/api/session` | Create a new live session (admin) |
| `GET` | `/api/session/:id` | Retrieve session details (student) |

### Example Response (POST `/api/session`)
```json
{
  "message": "Successfully created the session",
  "success": true,
  "session": {
    "_id": "6738c7ef7cdd45...",
    "type": "admin",
    "unique_id": "7d8a34a1-b3c2-48a6-987d-64a2b9f...",
    "userurl": "https://live-session-frontend.vercel.app/session/7d8a34a1-b3c2-48a6-987d-64a2b9f...",
    "createdAt": "2025-11-07T...",
    "updatedAt": "2025-11-07T..."
  }
}


⚡ Getting Started

1️⃣ Clone the Repository
git clone https://github.com/Hrittik17/Live-Session-Backend.git
cd Live-Session-Backend

2️⃣ Install Dependencies
npm install

3️⃣ Create .env File
PORT=8000
MONGO_URL=your_mongodb_connection_string

4️⃣ Run the Server
npm start


The backend runs at:

http://localhost:8000

🌐 Deployment

link : https://live-session-app-tutorarc-assignment.onrender.com



CORS Configuration
app.use(cors({
  origin: ['http://localhost:5173', 'https://live-session-frontend.vercel.app'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
}));

🧾 Logs Example (Morgan)
POST /api/session 201 123 - 45.678 ms
GET /api/session/7d8a34a1-b3c2-48a6-987d-64a2b9f 200 98 - 12.341 ms

🧑‍💻 Author

Name: Hrittik Kumar Tanti
Email: hrittikkumartanti@gmail.com
GitHub: https://github.com/Hrittik17

Built with ❤️ using Node.js, Express, and MongoDB