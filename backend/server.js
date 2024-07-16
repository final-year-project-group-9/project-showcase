const express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = require('./config/database');
const User = require('./models/User');
const Project = require('./models/Project');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Add more routes and database interactions here
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
