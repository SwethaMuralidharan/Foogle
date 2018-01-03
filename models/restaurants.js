var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var reviews=require('./reviews.js');

var restaurantsSchema = new Schema({
  name: String,
  location:String,
  // The huge variety of casing here is sad
  priceRange: String,
  serviceTime:String,
  cuisine:String,
  operationHours:[ String ],
  reviews: [ reviews.schema ],
});
var Restaurants = mongoose.model('Restaurants', restaurantsSchema);
module.exports = Restaurants;
