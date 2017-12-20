var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/foogle");

module.exports.Restaurants = require("./restaurants.js");
module.exports.Reviews = require("./reviews.js");
