const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();
const PORT=3000;
app.get("/users", (req, res) => {
    res.json(users);
});


app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))

