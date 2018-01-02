var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  review_text: String,
  username: String,
});

var Reviews = mongoose.model('Reviews', ReviewSchema);
module.exports = Reviews;
