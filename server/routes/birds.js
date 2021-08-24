const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const { Bird } = require('../models/bird.js')

router.get('/', async (req, res) => {

    const birds = await Bird.find().sort('name');
    res.send(birds);
});

router.post('/', async (req, res) => {
  const bird = new Bird({
    message: req.body.message,
    user: req.body.user
  });

  await bird.save();

  res.send(bird)
})

router.delete('/:id', async (req, res) => {
  const bird = await Bird.findOneAndDelete(req.params.id);

  if (!bird) return res.status(404).send('Cant find bird');

  res.send(bird)
})

router.get('/:id', async (req, res) => {
  const bird = await Bird.findById(req.params.id);

  if (!bird) return res.status(404).send('The bird with the given ID was not found.');

  res.send(bird);
});

module.exports = router; 