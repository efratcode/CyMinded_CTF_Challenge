//seting up a basic Express application and define the structure for our backend.

//imports
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the Express application
const app = express();
const PORT = 5000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Welcome to the CTF backend!');
});

app.get("/api",(req,res) => {
  res.json({"parks": ["Hollywood","Orlando","Japan", "Singapore", "Beijing"] })
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
