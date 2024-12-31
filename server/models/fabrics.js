const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fabricSchema = Schema({
    name: String,
    description: String,
    image: String,
    composition: {
        construction: String,
        fiber: Array,
        similarFabrics: Array,
    },
    characteristics: {
        weight: String,
        stretch: String,
        transparency: String,
        breathability: String,
        wrinkle: String,
        durability: String,
    },
    garments: {
        cleaning: String,
        uses: Array,
    },
    quantities: {
        cost: Number,     
        amount: Number,  
    },
});

module.exports = mongoose.model('Fabric', fabricSchema);


