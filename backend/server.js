import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const status = `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`;

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(status);
});

app.listen(PORT, () => {
  console.log(status.yellow.bold);
});
