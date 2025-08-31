const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;


// Set up rate limiter: maximum of 100 requests per 15 minutes per IP
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

// Serve static files for CSS, JS, and HTML assets
app.use(express.static(path.join(__dirname, '/')));

// Sample FAQs data
const faqs = [
    {
        question: "What is this project?",
        answer: "This is a simple homepage application with a Node.js backend."
    },
    {
        question: "How do I run the project?",
        answer: "Install Node.js, run 'npm install', and then start the server with 'node server.js'."
    },
    {
        question: "Where can I report bugs?",
        answer: "You can report bugs by following the reporting guidelines on the Reporting Guidelines page."
    },
    {
        question: "Is this project open source?",
        answer: "Yes, it's open source and licensed under the MIT License."
    }
];

// API endpoint for greeting
app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello from your Node.js backend!' });
});

// API endpoint for FAQs
app.get('/api/faqs', (req, res) => {
    res.json(faqs);
});

// Serve main pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Replace with about.html if you create one
});

app.get('/faq', limiter, (req, res) => {
    res.sendFile(path.join(__dirname, 'faq.html'));
});

app.get('/reporting-guidelines', (req, res) => {
    res.sendFile(path.join(__dirname, 'reporting-guidelines.html'));
});

// Fallback for 404 Not Found
app.use((req, res) => {
    res.status(404).send('404: Page not found');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
