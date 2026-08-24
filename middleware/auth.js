async function authenticateintUseronly(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ email
    });
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    req.user = user;
    next();
}