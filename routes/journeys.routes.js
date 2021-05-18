const express = require('express');
const Journey = require('../models/Journey.model');
const router = express.Router();

router.get('/', (req, res, next) => {
  Journey.find({ user: req.user.id })
    .then((journies) => { 
      res.status(200).json(journies)})
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  Journey.findOne({ _id: id, user: req.user.id })
    .then((journey) => res.status(200).json(journey))
    .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res, next) => {
  const { startHour, morningStandup, eveningStandup, date } = req.body;

  Journey.create({ startHour, morningStandup, eveningStandup, user: req.user.id, date })
    .then((journey) => res.status(200).json(journey))
    .catch((err) => res.status(500).json(err));
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  console.log(req.body);
  Journey.findOneAndUpdate({ _id: id, user: req.user.id }, req.body, { new: true })
    .then((journey) => res.status(200).json(journey))
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  Journey.findOneAndRemove({ _id: id, user: req.user.id })
  .then(() => res.status(200).json({ message: `Journey ${id} deleted` }))
  .catch(err => res.status(500).json(err))
})

module.exports = router;
