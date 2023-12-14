const mongoose = require("mongoose");
const entrySchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add text field"],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Entry", entrySchema);
