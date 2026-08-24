const user = require('../model/user');
async function handleusersignup(req, res) {
    const { username, email, password } = req.body;
    await user.create({ name: username, email, password });
    return res.render("signup", { message: "User created successfully" });
} 
async function handleuserlogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.render("login", { message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.render("login", { message: "Invalid credentials" });
    }
    return res.render("login", { message: "Login successful" });
}
module.exports = { handleusersignup, handleuserlogin };
