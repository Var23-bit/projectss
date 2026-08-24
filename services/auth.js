const jwt = require('jsonwebtoken');
const secretKey ="varun563653@${process.env.JWT_SECRET}";

function generateToken(user) {
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    return token;
}
function getuseridfromtoken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded.id;
    } catch (error) {
        return null;
    }
}
module.exports = { generateToken, getuseridfromtoken };
