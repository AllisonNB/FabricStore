require('dotenv').config();
const mongoose = require('mongoose');
const fabricData = require('./fabricData');
const Fabric = require('../models/fabrics');

const dbUrl = 'mongodb+srv://allisonbrown:7xFULrGkhiFTHWlk@cluster0.ch8mu.mongodb.net/';

mongoose.connect(dbUrl)
    .then(
        console.log('connection with database successful')
    )
    .catch(e => {
        console.log('error in connecting with database');
        console.log(e)
});



const seedDB = async () => {
    await Fabric.deleteMany({});
    console.log('cleared data')
    await Fabric.insertMany(fabricData); 
    console.log('imported data');
};


seedDB().then(() => {
    mongoose.connection.close();
    console.log('closed connection');
})



