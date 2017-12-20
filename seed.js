var db = require('./models');

var restaurants_list = [
  {
  name: "Gary Danko",
  location: "Fisherman's wharf",
  price_range: "Expensive",
  serviceTime: "30 min",
  cuisine: "American",
  OperationHours: [ "Mon-fri : 5:30pm to 10pm" ]
  },
  {
  name: "Velvet Cantina",
  location: "Mission District",
  price_range: "moderate",
  serviceTime: "30 min",
  cuisine: "Mexican",
  OperationHours: [ "Mon-fri : 5 pm to 12am" ]
  }
]
var reviews_list=[
  {
    review_text : "Food is excellant",
    username : "Gordon Ramsay"
  },
  {
    review_text : "yummy food",
    username : "Emeril Lagasse"
  }
]
db.Restaurants.remove({}, function(err, restaurants){
 console.log('removed all restaurants');

   restaurants_list.forEach(function (rest_Data) {

    var restaurant = new db.Restaurants({
     name: rest_Data.name,
     location: rest_Data.location,
     price_range: rest_Data.price_range,
     serviceTime: rest_Data.serviceTime,
     cuisine: rest_Data.cuisine,
     OperationHours:rest_Data.OperationHours,
     reviews:reviews_list
   });

     restaurant.save(function(err, savedrestaurant){
        if (err) {
          return console.log(err);
        }
        console.log(savedrestaurant);
        process.exit();
       });
   });
 });
