const jwt = require('jsonwebtoken');
const SECRET_KEY = 'CTF{th1s_1s_Th3_K3y}';

// Middleware to authenticate and decode JWT
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user; // Attach user data to the request object
    next();
  });
}

module.exports = { authenticateToken };
