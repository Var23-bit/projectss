const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');
const app = express();
const PORT=3000;
app.use(express.urlencoded({ extended: false}));
app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/api/users", (req, res) => {
    // Handle POST request for creating a new user
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        return res.json({status: "pending"});
    });
});
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))

