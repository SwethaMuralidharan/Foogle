var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var reviews=require('./reviews.js');

var restaurantsSchema = new Schema({
  name: String,
  location:String,
  price_range: String,
  serviceTime:String,
  cuisine:String,
  OperationHours:[ String ],
  reviews: [ reviews.schema ],
});
var Restaurants = mongoose.model('Restaurants', restaurantsSchema);
module.exports = Restaurants;
