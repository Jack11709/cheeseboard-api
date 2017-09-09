const mongoose = require('mongoose');

const cheeseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  image: { type: String, required: true },
  tastingNotes: { type: String, maxlength: 380 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

cheeseSchema.methods.isOwnedBy = function isOwnedBy(user) {
  if(!user) return false;  
  return !!user.cheeses.find(cheese => cheese.id === this.id);
};

module.exports = mongoose.model('Cheese', cheeseSchema);
