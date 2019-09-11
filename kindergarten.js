var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KindergartenSchema = new Schema({
name:String,
description:String,
email:String,
phone:String,
url:String,
opening_hours:[String],
image_url:String,
latitude:Number,
longitude:Number
})

module.exports = mongoose.model('Kindergarten', KindergartenSchema)