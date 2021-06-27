import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;
const status = `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(status);
});

app.listen(PORT, () => {
  console.log(status);
});
