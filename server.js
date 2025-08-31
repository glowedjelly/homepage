const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '/')));

// Simple API endpoint for greeting
app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello from your Node.js backend!' });
});

// Fallback to index.html for root and simple routes
app.get(['/', '/about'], (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
