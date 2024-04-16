
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bakeryRoutes = require('./routes/bakeryRoutes');
const ingreRoutes = require('./routes/ingreRoutes')

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

console.log("🚩✔");

app.use('/api/bakery', bakeryRoutes);
app.use('/api/ingredients', ingreRoutes);


// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/bakery'; 
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
