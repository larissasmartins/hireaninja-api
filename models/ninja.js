const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

//create ninja Schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"] //provide feedback the info validation
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false //if it doesn't say its true, when create a new ninja the default is false
    },
    geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema) //collection's name in the database

module.exports = Ninja;