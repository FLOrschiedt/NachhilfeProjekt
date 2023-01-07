const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Middlewares
/*
app.use('/posts', () => {
    console.log('This is a middleware running')
});
*/

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');
});

//Verbindung zur Datenbank
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to DB!'));

// hier hört die App dem Server mit dem Port z.B. 3000 zu
app.listen(3000);
