const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// API endpoint to serve the Google Maps API key
app.get('/api-key', (req, res) => {
    res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});