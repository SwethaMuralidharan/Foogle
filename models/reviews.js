var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  reviewText: String,
  username: String,
});

var Reviews = mongoose.model('Reviews', ReviewSchema);
module.exports = Reviews;
