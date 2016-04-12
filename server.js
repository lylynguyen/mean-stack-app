var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();


mongoose.connect('mongodb://localhost/productdb');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/productlist', function(req, res){
  List.find({}).then(function(list){
    res.json(list);
  })
})


app.post('/productlist', function(req, res) {
  var name = req.body.name;
  var url = req.body.url;
  var price = req.body.price;
  List.create({name: name, url: url, price: price})
  .then(function(list){
    user.save();
    res.send(201);
  })
})

app.put('/productlist/:id', function(req, res) {
  var id = req.params.id;
  List.findOneUpdate({_id: id})
  .then(function(item) {
    user.save();
    res.send(200);
  })
})

app.delete('/productlist/:id', function(req, res) {
  var id = req.params.id;
  List.remove({_id: id})
  .then(function(item) {
    res.json(item);
  })
})


module.exports = app;

app.listen(3000);
console.log("Listeing on port 3000");

//database schema
var Schema = mongoose.Schema;

var ListSchema =  new Schema({
  name: String,
  url: String,
  price: Number
});

var List = mongoose.model('List', ListSchema);



