const express = require('express');
const router = require('./staticrouter');
router.get("/", (req, res) => {
    return res.render("home");
});
module.exports = router;

