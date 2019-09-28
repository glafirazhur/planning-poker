// Models
import User from './models/user.model';
import UserStory from './models/userstory.model';
import Poll from './models/poll.model';
import Vote from './models/vote.model';

const express = require('express');

const app = express();
const router = express.router();

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());

const dbRoute = 'mongodb+srv://admin:admin12345r@ppcluster-dtinz.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });
const { connection } = mongoose;

router.route('/users').get((req, res) => {
  User.find((err, users) => {
    console.log(users);
    if (err) return [];
    return res.json(users);
  });
});

router.route('/userstories').get((req, res) => {
  UserStory.find((err, userstories) => {
    console.log(userstories);
    if (err) return [];
    return res.json(userstories);
  });
});

router.route('/poll').get((req, res) => {
  Poll.find((err, polls) => {
    console.log(polls);
    if (err) return [];
    return res.json(polls);
  });
});

router.route('/votes').get((req, res) => {
  Vote.find((err, votes) => {
    console.log(votes);
    if (err) return [];
    return res.json(votes);
  });
});

app.use('/', router);

connection.once('open', () => console.log('Connected to DB'));
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
