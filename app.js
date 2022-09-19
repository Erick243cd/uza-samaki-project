const express = require('express');
const expresslayouts = require('express-ejs-layouts');

require('dotenv').config();

const app = express();
const port = process.env.APP_PORT || 9000;


// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expresslayouts);


app.set('layout', './layouts/main');
app.set('view engine', 'ejs')


const routes = require('./server/routes/routeConfig.js')

app.use('/', routes);

app.listen(port, () => console.log(`Listening to port ${port}`));

