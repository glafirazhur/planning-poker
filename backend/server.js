const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());

const dbRoute = 'mongodb+srv://admin:admin12345r@ppcluster-dtinz.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });
const { connection } = mongoose;

connection.once('open', () => console.log('Connected to DB'));
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
