const express = require('express');
const OffDay = require('../models/OffDay.model');
const router = express.Router();

router.get('/', (req, res, next) => {
  OffDay.find({ user: req.user.id})
  .then((offdays) => {
    res.status(200).json(offdays)
  })
  .catch((err) => res.status(500).json(err))
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  OffDay.findOne({ _id: id, user: req.user.id })
  .then((offday) => res.status(200).json(offday))
  .catch((err) => res.status(500).json(err))
});

router.post('/', (req, res, next) => {
  const { startDay, endDay, type } = req.body;

  OffDay.create({ startDay: Date(startDay), endDay: Date(endDay), type, user: req.user.id })
  .then((offday) => res.status(200).json(offday))
  .catch((err) => res.status(500).json(err));
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;

  OffDay.findOneAndUpdate({ _id: id, user: req.user.id }, req.body, { new: true })
  .then((offDay) => res.status(200).json(offDay))
  .catch((err) => res.status(500).json(err))
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  OffDay.findOneAndRemove({ _id: id, user: req.user.id })
  .then(() => res.status(200).json({ message: `Off Day ${id} deleted` }))
  .catch(err => res.status(500).json(err))
})

module.exports = router;