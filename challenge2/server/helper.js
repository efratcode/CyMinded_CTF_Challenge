const { users } = require('./database');

// Validate if the FLAG exists and return the associated user
function findUserByFlag(flag) {
  return users.find((u) => u.flag === flag);
}

module.exports = { findUserByFlag };
