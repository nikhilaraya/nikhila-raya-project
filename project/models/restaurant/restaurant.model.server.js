/**
 * Created by user on 03-08-2017.
 */
var mongoose = require('mongoose');
var restaurantSchema = require('./restaurant.schema.server');
var restaurantModel = mongoose.model('restaurantModel',restaurantSchema);

module.exports = restaurantModel;