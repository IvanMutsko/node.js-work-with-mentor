const { model, Schema } = require("mongoose");

const frogSchema = Schema({
  name: String,
  color: String,
  size: String,
  quantity: {
    type: Number,
    default: 1,
  },
  habitat: {
    type: Array,
    require: [true, "Please enter a habitat"],
  },
});

const Frog = model("frog", frogSchema);

module.exports = Frog;
