/**
 * Created by user on 03-08-2017.
 */
var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
    restId: {type: String},
    name: {type:String},
    imageUrl: {type: String},
    ratings:[{
        userId: {type: String},
        rating: {type: Number}
    }],
    reviews:[{
        userId:{type: String},
        text:{type: String}
    }],
},{collection: "project_restaurant"});

module.exports = restaurantSchema;
