const express = require('express');
const mySql = require('mysql');
const app = express();
app.use(express.json());
const connection = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "Varun@123",
    database: "varun"
}) 
db.connect(function(err) {
    if (err) {
        console.log("Error connecting to database:", err);
    } else {
        console.log("Connected to database!");
    }
})

app.get("/users", function(req, res) {
    db.query("SELECT * FROM users", function(err, results) {
        if (err) {
            res.json({ error: "Something went wrong" })
        } else {
            res.json(results)
        }
    })
})


app.get("/users/:id", function(req, res) {
    let id = req.params.id
    db.query("SELECT * FROM users WHERE id = ?", [id], function(err, results) {
        if (err) {
            res.json({ error: "Something went wrong" })
        } else if (results.length === 0) {
            res.json({ error: "User not found" })
        } else {
            res.json(results[0])
        }
    })
})


app.post("/users", function(req, res) {
    let name = req.body.name
    let email = req.body.email
    db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], function(err, results) {
        if (err) {
            res.json({ error: "Something went wrong" })
        } else {
            res.json({ message: "User added!", id: results.insertId })
        }
    })
})

app.delete("/users/:id", function(req, res) {
    let id = req.params.id
    db.query("DELETE FROM users WHERE id = ?", [id], function(err, results) {
        if (err) {
            res.json({ error: "Something went wrong" })
        } else {
            res.json({ message: "User deleted!" })
        }
    })
})

app.listen(3000, function() {
    console.log("Server started on port 3000")
})