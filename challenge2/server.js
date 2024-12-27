//this file handles the backend for the react app, (API's and server side logic)
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve the React build folder
app.use(express.static(path.join(__dirname, 'build')));

// Define your API routes here (if needed)
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Catch-all route to serve React's index.html for frontend routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
