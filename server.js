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
    // some error handling would be useful!
    res.json(restaurants);
  })
})

app.post('/api/restaurants',function(req,res){
  db.Restaurants.create(req.body, function(err, rest) {
    if (err) { console.log('error occured in create restaurant method', err); }
    res.json(rest);
  });
})

app.delete('/api/restaurants/:id',function(req,res){
  var restID = req.params.id;
  db.Restaurants.findOneAndRemove({ _id: restID }, function (err, deletedRest) {
    res.json(deletedRest);
  });
})

app.put('/api/restaurants/:id',function(req, res) {
  // all the words about albums here is sloppy. Please, at the very least,
  // update variable names when you copy and paste code.
  db.Restaurants.findById(req.params.id, function(err, foundAlbum) {
    if (err) {
      console.log('albumsController.update error', err);
    }
    foundAlbum.location = req.body.location;
    foundAlbum.priceRange = req.body.price_range;
    foundAlbum.operationHours = req.body.OperationHours;
    foundAlbum.serviceTime = req.body.serviceTime;
    foundAlbum.name = req.body.name;
    foundAlbum.cuisine = req.body.cuisine;
    foundAlbum.save(function(err, savedAlbum) {
      if (err) {
        console.log('saving altered album failed');
      }
      res.json(savedAlbum);
    });
  });
})

app.post('/api/restaurants/:rest_id/reviews', function (req, res){
  // why did you use .exec for this while you used callbacks elsewhere?
  // also, please use camelCase in JS.
  db.Restaurants.findById(req.params.rest_id, function(err,foundRestaurant){
    console.log(req.body);
    // this error handling is great! Would love to see this in other spots too.
    if(err) {
      console.log(err);
    }
    else if(foundRestaurant===null) {
      res.status(404).json({error:"No restaurant found by this ID"});
    }
    else {
      foundRestaurant.reviews.push(req.body);
    }
    // make sure to wait until something has successfully saved before you send a response.
    foundRestaurant.save(function(err, savedRestaurant) {
      res.json(savedRestaurant);
    });

    })
  });

app.delete('/api/restaurants/:restaurant_id/reviews/:review_id', function(req,res){
  var reviewId=req.params.review_id;
  var restaurantId=req.params.restaurant_id;
  db.Restaurants.findById(restaurantId).exec(function(err,foundRestaurant){
    if(err){
      // this won't send anything back to the client if there's an error--consider actually sending an error message here.
      console.log("error in deleting reviews ",err)
    }
    else{
          var deleted_review=foundRestaurant.reviews.id(reviewId);
          deleted_review.remove();
          foundRestaurant.save();
          res.json(foundRestaurant);
       }

  })
})

app.put('/api/restaurants/:restaurant_id/reviews/:review_id',function(req,res){
  var review_id=req.params.review_id;
  var restaurant_id=req.params.restaurant_id;
  console.log(req.body);
  db.Restaurants.findById(restaurant_id).exec(function(err,foundrestaurant){
    if(err){
      console.log("error in deleting reviews ",err)
    }
    else{
          var updated_review=foundrestaurant.reviews.id(review_id);
          if(updated_review){
             updated_review.username=req.body.username;
             updated_review.reviewText=req.body.review_text;
             foundrestaurant.save(function(err,saved){
               console.log("updated review",updated_review);
               res.json(updated_review);
            })
          }
        }
  })
})


app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
})
