const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/calculatorDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema
const resultSchema = new mongoose.Schema({
  num1: Number,
  num2: Number,
  operation: String,
  result: Number,
  timestamp: { type: Date, default: Date.now },
});

const Result = mongoose.model('Result', resultSchema);

// API
app.post('/api/save', async (req, res) => {
  const { num1, num2, operation, result } = req.body;
  const newResult = new Result({ num1, num2, operation, result });
  await newResult.save();
  res.status(201).send('Saved to DB');
});

app.listen(5000, () => console.log('Server running on port 5000'));