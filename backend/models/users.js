const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  skillsKnown: [String],
  skillsWanted: [String],
});

module.exports = mongoose.model("User", userSchema);