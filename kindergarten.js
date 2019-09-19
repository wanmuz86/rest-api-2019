var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
	username:String,
	rating:Number,
	message:String

})
var KindergartenSchema = new Schema({
name:String,
description:String,
email:String,
phone:String,
url:String,
opening_hours:[String],
image_url:String,
latitude:Number,
longitude:Number,
reviews:[reviewSchema],
avgRating:{type:Number, default:0},
createdAt:{type:Date, default:Date.now}
})

module.exports = mongoose.model('Kindergarten', KindergartenSchema)