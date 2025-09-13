const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for SPA navigation
// Catch-all handler for SPA (must be after static middleware)

// Apply rate limiting to SPA fallback route
const spaLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100,                   // limit each IP to 100 requests per windowMs
});

app.use(spaLimiter, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Glowing site running at http://localhost:${PORT}`);
});