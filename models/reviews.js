var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  review_text: String,
  username: String,
},
{
  // timestamps:true
  timestamps: { createdAt: 'created_at' }
}
);

var Reviews = mongoose.model('Reviews', ReviewSchema);
module.exports = Reviews;
