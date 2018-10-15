const express = require('express')
let app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan')
const path = require('path');
let userRoutes = require('./routes/userRoutes');
let adminRoutes = require('./routes/adminRoutes');
let ethRoutes =require('./routes/ethRoutes')
let config = require('./config/config-dev');
let adminHandler=require('./fileHandler/adminHandler.js')
cors = require('cors'),

mongoose.connect(config.mongo_url,{ useNewUrlParser: true });
app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type',);
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/eth', ethRoutes);


/*.................attach a front end website..................*/
app.use(express.static(path.join(__dirname, 'public/dist')));
app.get('*', function (req, res) {  //always use * b refresh time it gives error.. 
    res.sendFile(__dirname + '/public/dist/index.html');
  });

/*.................attach a front end website..................*/
// app.post('/resetPassword',adminHandler.resetPassword)
app.listen(config.server_port, () => {
    console.log("KitPAY Server Connected =======>." + config.server_port)
});


