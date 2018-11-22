const mongoose = require('mongoose');

const cheeseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  image: { type: String, required: true },
  tastingNotes: { type: String, maxlength: 380 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  toJSON: {
    transform(doc, json) {
      delete json.__v;
      return json
    }
  }
});

module.exports = mongoose.model('Cheese', cheeseSchema);
