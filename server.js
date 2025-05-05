const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Corrected the PORT fallback

app.get('/', (req, res) => { // Fixed the route and arrow function syntax
  res.send('Hello from DevOps Assignment!');
});

app.listen(PORT, () => { // Corrected the arrow function syntax
  console.log(`Server running on port ${PORT}`);
});
