var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Kindergarten = require('./kindergarten')

mongoose.connect('mongodb+srv://apiuser:abcd1234@cluster0-khxyy.mongodb.net/test?retryWrites=true&w=majority')


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req,res){
	res.json({message:'hooray! welcome to our API'})
})

router.route('/kindergartens')
.post(function(req,res){
	var kindergarten = new Kindergarten();
	kindergarten.name = req.body.name;
	kindergarten.description = req.body.description;
	kindergarten.email = req.body.email;
	kindergarten.phone = req.body.phone;
	kindergarten.url = req.body.url;
	kindergarten.opening_hours = req.body.opening_hours;
	kindergarten.image_url = req.body.image_url;
	kindergarten.latitude = req.body.latitude;
	kindergarten.longitude = req.body.longitude;

	kindergarten.save(function(err){
		if (err){
			res.send(err)
		}
		else {
			res.json({message:'Kindergarten succesfully added!'})
		}
	})

})
.get(function(req,res){
	Kindergarten.find(function(err,kindergartens){
		if (err){
			res.error(err)
		}
		else {
			res.json({status:"ok",data:kindergartens})
		}
	})
})

router.route('/kindergartens/:id')
.get(function(req,res){
	Kindergarten.findById(req.params.id,function(err,kindergarten){
		if (err){
			res.error(err)
		}
		else {
			res.json({status:"ok",data:kindergarten})
		}
	})
})
app.use('/api',router);

app.listen(port)

console.log('Magic happens in port '+port)