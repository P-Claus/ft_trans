import express from "express";
import sqlite3 from "sqlite3";
import bcrypt from "bcryptjs";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import jwt from "jsonwebtoken";
import { console } from "inspector";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const db = new sqlite3.Database(path.join(__dirname, "users.db"));

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// Create users table
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
	email TEXT UNIQUE,
    password TEXT,
	username TEXT UNIQUE
)`);

//server home page
app.get("/", (req, res) => {
	res.send("Hello, the server is working");
})
// Register User (POST /register)
app.post("/register", async (req, res) => {
	console.log("The data is: ", req.body);
	const { email, password, username } = req.body;
	console.log("The email is: ", email);
	console.log("The password before hashing is: ", password);

	try {
		// Hash password
		const hashedPassword = await bcrypt.hash(password, 10);
		console.log("The password after hashing: ", hashedPassword);

		db.run(
			`INSERT INTO users (email, password, username) VALUES (?, ?, ?)`,
			[email, hashedPassword, username],
			(err) => {
				if (err) {

					console.error("Database Insert Error:", err); // Log the actual error
					return res.status(400).json({ error: "Username or email already exists!" });
				}
				res.json({ message: "✅ User registered successfully!" });
			}
		);
	} catch (error) {
		res.status(500).json({ error: "Server error" });
	}
});

// Login User (POST /login)
app.post("/login", (req, res) => {
	const { email, password } = req.body;

	db.get(`SELECT * FROM users WHERE email= ?`, [email], async (err, user) => {
		if (!user || !(await bcrypt.compare(password, user.password))) {
			return res.status(401).json({ error: "Invalid username or password" });
		}

		const token = jwt.sign({ email: user.email }, "secretKey", { expiresIn: "1h" });
		res.send(token);

		//res.json({ message: "✅ Login successful!", token });
	});



});

//get all the users
app.get('/get-all-users', async (req, res) => {
	db.all(`SELECT id, username, email, password FROM users`, [], (err, rows) => {
		if (err) {
			return res.status(500).json({ error: "Database error" });
		}
		res.json({ users: rows });
		
	});
})

// Start server
const PORT = 1919;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

