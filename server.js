const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const throwRandomlyErrors = false;

// Enable CORS for all routes
app.use(cors());

// Middleware to simulate a 3-second delay and randomly throw a 500 error
app.use("/resolveAppConfig", (req, res, next) => {
  if (Math.random() < 0.5 && throwRandomlyErrors) {
    // Simulating a server error
    res.status(500).send("Internal Server Error");
  } else {
    next();
  }
});

// GET route that randomly returns 'default' or 'advanced'
app.get('/resolveAppConfig', (req, res) => {
    const strategies = ['default', 'advanced'];
    const selectedStrategy = strategies[Math.floor(Math.random() * strategies.length)];
    res.send({
      pollingStrategy: selectedStrategy,
      defaultInterval: 1000
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
