var express = require('express'),
    bodyParser = require('body-parser'),
    db=require('./models');


var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/api/restaurants',function(req,res){
  db.Restaurants.find({}, function(err,restaurants){
    res.json(restaurants);
  })
})
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
})
