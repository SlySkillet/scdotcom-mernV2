const mongoose = require("mongoose");
const entrySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please add title"],
    },
    subject: {
      type: String,
      required: [true, "please add subject"],
    },
    date: {
      type: String,
      required: false,
    },
    image: {
      type: Object,
      required: false,
    },
    entryBody: {
      type: Object,
      required: [true, "please add entry body"],
    },
    links: {
      type: Array,
      required: false,
    },
    tags: {
      type: Array,
      required: true,
    },
    inDevelopment: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Entry", entrySchema);
