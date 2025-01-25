//seting up a basic Express application and define the structure for our backend.

//imports
const express = require('express');
const bodyParser = require('body-parser');
const { users, FLAG } = require('./database'); // Import mock database
const { findUserByFlag } = require('./helper');
const cors = require('cors');


// Initialize the Express application
const app = express();
const PORT = 5000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000',
}));


app.get('/', (req, res) => {
  res.send('Welcome to the CTF backend!');
});

app.get("/api",(req,res) => {
  res.json({"parks": ["Hollywood","Orlando","Japan", "Singapore", "Beijing"] })
})

app.post('/api/validate-flag', (req, res) => {
  const { flag } = req.body; // Extract the submitted FLAG from the request

  // Check if the flag is missing
  if (!flag) {
    return res.status(400).json({ valid: false, message: 'Flag is required.' });
  }

  //get the user and validate existance
  const user = findUserByFlag(flag);
  if (!user) {
    return res.status(401).json({ valid: false, message: 'Invalid flag. Try again.' });
  }
  
  res.json({ 
      valid: true, 
      message: 'Correct flag!',
      userRole: user.role,
  });
  
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
