import express from 'express';
import routes from './routers';

const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(
  process.env.CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
);
const { connection } = mongoose;

app.use('/votes', routes.votes);

connection.once('open', () => console.log('Connected to DB'));
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
