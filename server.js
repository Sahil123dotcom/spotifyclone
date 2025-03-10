const express = require('express');
const cors = require('cors');
const Routes = require('./routes/Routes.js'); // Ensure the routes file is imported

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use('/', Routes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
