const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // other fields can be added here
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
