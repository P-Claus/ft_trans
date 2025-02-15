import express from "express";
import sqlite3 from "sqlite3";
import bcrypt from "bcryptjs";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const db = new sqlite3.Database(path.join(__dirname, "users.db"));

// Middleware
app.use(express.json());
app.use(cors());

// Create users table
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
)`);

// Register User (POST /register)
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        db.run(
            `INSERT INTO users (username, password) VALUES (?, ?)`,
            [username, hashedPassword],
            (err) => {
                if (err) return res.status(400).json({ error: "Username already exists!" });
                res.json({ message: "✅ User registered successfully!" });
            }
        );
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Login User (POST /login)
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err, user) => {
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        res.json({ message: "✅ Login successful!" });
    });
});

// Start server
const PORT = 5555;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

