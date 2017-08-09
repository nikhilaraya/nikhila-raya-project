/**
 * Created by user on 03-08-2017.
 */
var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('userModel',userSchema);

module.exports = userModel;