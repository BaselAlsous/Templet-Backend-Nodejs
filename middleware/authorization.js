const jwt = require('jsonwebtoken');

function authorization(token){
let userId;
try {
    if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Token not provided' });
}
let token_content  = token.replace('Bearer ' , '');
jwt.verify(token_content, process.env.SECRET, (err, decoded) => {
    if (err) {
        return res.status(401).json({ message: 'Token is invalid' });
    }    
        userId = decoded.userId;
    
    });
    return userId;
} catch (error) {
console.error('Token verification failed:', error);
}
}

module.exports = { authorization };