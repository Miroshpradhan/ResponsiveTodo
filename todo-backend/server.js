require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const todoRoutes = require('./Routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use(cors()); 
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
