const bcrypt = require('bcrypt')
const _ = require('lodash')
const { User } = require('../models/user')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
    
  
    let user = await User.findOne({ email: req.body.email, name: req.body.name })
    if (user) return res.status(400).send('There is already a user with that email');
    
    user = new User(_.pick(req.body, ['email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)
    await user.save();
});

module.exports = router;