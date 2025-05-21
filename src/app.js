const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

// DATABASE 
const db = require('./models');

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send(' <h1 style="text-align: center;">E-commerce Backend API </h1> ');
});

//Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

// This will create tables if they don't exist yet
db.sequelize.sync({ force: false }) // force: true will drop and recreate tables
  .then(() => console.log('✅ All models synced with DB'))
  .catch((err) => console.error('❌ Sync error:', err));