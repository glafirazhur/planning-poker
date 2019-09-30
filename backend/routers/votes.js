import { Router } from 'express';
// import initialState from '../../src/Redux/initialState';

// const { votes } = initialState;
import Vote from '../models/vote.model';

const router = Router();

router.get('/', (req, res) => {
  Vote.find((err, votes) => {
    if (err) return err;
    return res.send(votes);
  });
});

router.post('/add', (req, res) => {
  const newVote = new Vote(req.body);
  newVote.save()
    .then(() => res.json(newVote))
    .catch((err) => console.log(err));
});

router.post('/update', (req, res) => {
  Vote.findOne({ _id: req.body.voteId }, (err, vote) => {
    if (vote) {
      // eslint-disable-next-line no-param-reassign
      vote.voteValue = req.body.voteValue;
      vote.save()
        .then(() => res.send(vote))
        .catch(() => console.log(err));
    }
  });
});

export default router;
