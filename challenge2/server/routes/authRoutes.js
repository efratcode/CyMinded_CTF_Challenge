//routes for user authentication: login and reset password

const express = require('express');
const jwt = require('jsonwebtoken');
const { users } = require('../database'); // Import users from the database

const router = express.Router();
const SECRET_KEY = 'CTF{th1s_1s_Th3_K3y}'; // Secret key for JWT signing

// Login route
router.post('/login', (req, res) => {
  const { userName, password } = req.body;

  // Check if user exists in database
  const user = users.find((u) => u.userName === userName && u.password === password);

  if (!user) {
    console.log('Invalid credentials for:', { userName, password });
    return res.status(403).json({ error: 'Invalid credentials' });
  }

  // Generate a token and return it
  const token = generateToken(user);
  res.json({ token });
});

// Password reset route (vulnerable)
router.post('/reset-password', (req, res) => {
  const { userName } = req.body;

  // Find the user in the database
  const user = users.find((u) => u.userName === userName);
  if (!user) return res.status(404).json({ error: 'User not found' });

  // Intentional flaw: No validation of who requested the reset
  user.password = 'newpassword123'; // Hardcoded new password
  res.json({ message: `Password reset successful. New password: newpassword123` });
});

// Helper function to generate a JWT
function generateToken(user) {
  return jwt.sign({ userId: user.userId, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
}

module.exports = router;
