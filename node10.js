const express = require("express")
const mysql = require("mysql2")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const app = express()
app.use(express.json())

const db = mysql.createConnection({
    host: "mysql-2a89528f-varunkumar62058-36c6.i.aivencloud.com",
    port: 16142,
    user: "avnadmin",
    password: process.env.DB_PASSWORD,
    ssl: { rejectUnauthorized: false }
})

db.connect(function(err) {
    if (err) {
        console.log("Database connection failed:", err)
    } else {
        console.log("Database connected!")
    }
})

const SECRET = "varun_secret_key"

// REGISTER
app.post("/register", async function(req, res) {
    let username = req.body.Username
    let password = req.body.Password
    // check if fields are empty
    if (!username || !password) {
        return res.json({ error: "Username and password are required!" })
    }

    // check password length
    if (password.length < 6) {
        return res.json({ error: "Password must be at least 6 characters!" })
    }
    db.query("SELECT * FROM auto_user WHERE Username = ?",
    [username],
    async function(err, results) {
        if (err) {
            res.json({ error: err.message })
        
        // Step 2 — if user found, reject registration
        } else if (results.length > 0) {
            res.json({ error: "Username already taken!" })
        } else {

    // encrypt password
    let hashedPassword = await bcrypt.hash(password, 10)

    db.query("INSERT INTO auto_user (Username, Password) VALUES (?, ?)",
    [username, hashedPassword],
    function(err, results) {
        if (err) {
            res.json({ error: err.message })
        } else {
            res.json({ message: "User registered successfully!" })
        }
    })
}
    })
})

// LOGIN
app.post("/login", function(req, res) {
    let username = req.body.Username
    let password = req.body.Password

    db.query("SELECT * FROM auto_user WHERE Username = ?",
    [username],
    async function(err, results) {
        if (err) {
            res.json({ error: err.message })
        } else if (results.length === 0) {
            res.json({ error: "User not found" })
        } else {
            let user = results[0]
            let passwordMatch = await bcrypt.compare(password, user.Password)

            if (passwordMatch) {
                
                let token = jwt.sign(
                    { id: user.Id, username: user.Username },
                    SECRET,
                    { expiresIn: "1h" }
                )
                res.json({ message: "Login successful!", token: token })
            } else {
                res.json({ error: "Wrong password" })
            }
        }
    })
})

// PROTECTED ROUTE
app.get("/dashboard", function(req, res) {
    let token = req.headers.authorization

    if (!token) {
        return res.json({ error: "No token provided" })
    }

    try {
        let decoded = jwt.verify(token, SECRET)
        res.json({ message: "Welcome " + decoded.username + "!", data: "This is protected data" })
    } catch(err) {
        res.json({ error: "Invalid token" })
    }
})
const PORT = process.env.PORT || 3000
app.listen(PORT, function() {
    console.log("Server started on port " + PORT)
})