const express = require('express');
const app = express();
const PORT = 5000;

// Allow frontend to connect (CORS)
const cors = require('cors');
app.use(cors());

// Simple route
app.get('/', (req, res) => {
    res.send('Hello from backend server!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});