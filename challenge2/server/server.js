//seting up a basic Express application and define the structure for our backend.

//imports
const express = require('express');
const bodyParser = require('body-parser');
const { users, FLAG } = require('./database'); // Import mock database
const cors = require('cors');


// Initialize the Express application
const app = express();
const PORT = 5000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());
app.use(cors());


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

  // Validate the FLAG
  if (flag === FLAG) {
    return res.json({ valid: true, message: 'Correct flag!' });
  }

  // Respond with an error if the FLAG is incorrect
  res.status(401).json({ valid: false, message: 'Invalid flag. Try again.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
