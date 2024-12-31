//List users & Edit users data (vulnerable to broken access control).
const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const { users } = require('../database'); // Import mock users

const router = express.Router();

// Get all users (vulnerable: no role-based access control)
router.get('/', authenticateToken, (req, res) => {
  res.json(users);
});

// Edit users data (vulnerable)
router.put('/:id/edit', authenticateToken, (req, res) => {
  const usersId = parseInt(req.params.id);
  const users = users.find((e) => e.id === usersId);

  if (!users) return res.status(404).json({ error: 'users not found' });

  // Intentional flaw: No check if the user is authorized to edit
  const { salary } = req.body;
  if (salary) users.salary = salary;

  res.json({ message: 'users updated', users });
});

module.exports = router;
