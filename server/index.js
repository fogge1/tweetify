const Joi = require('joi');

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const birds = require('./routes/birds')
const { allowCrossDomain } = require('./middleware/cors');
const users = require('./routes/users');

mongoose.connect('mongodb://localhost/birdapp')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB... ' + err));


app.use(express.json());
app.use(allowCrossDomain);
app.use('/birds', birds)
app.use('/users', users);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));