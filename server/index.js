const express = require('express');
const mongoose = require('mongoose');

const config = require('./config/dev');
const FakeDb = require('./fake-db');

const rentalRoutes = require('./routes/rentals');

const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(config.DB_URI, { useNewUrlParser: true }).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
});

app.use('/api/v1/rentals', rentalRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});