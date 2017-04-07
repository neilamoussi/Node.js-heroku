var mongoose    = require('mongoose');
var movieSchema = new mongoose.Schema({
	
  id: {
    type: Number,
    required: true,
    index: {
      unique: true
    }
  },
  imagePath :{
    type: String, 
    required: true
  },
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
   author: {
    type: String,
    required: true
  }
  
});
module.exports = mongoose.model('Movie', movieSchema);