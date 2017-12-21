var express = require('express'),
    bodyParser = require('body-parser'),
    db=require('./models');


var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/api/restaurants',function(req,res){
  db.Restaurants.find({}, function(err,restaurants){
    res.json(restaurants);
  })
})

app.post('/api/restaurants/:rest_id/reviews', function (req, res){
  db.Restaurants.findById(req.params.rest_id)
  .exec(function(err,foundrestaurant){
    console.log(req.body);
    if(err) { console.log(err); }
    else if(foundrestaurant===null){  res.status(404).json({error:"No restaurant found by this ID"}); }
    else {    foundrestaurant.reviews.push(req.body); }

    foundrestaurant.save();
    res.json(foundrestaurant);
    })
  });

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
})
