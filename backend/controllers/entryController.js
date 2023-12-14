const asyncHandler = require("express-async-handler");

// @desc get all blog entries
// @route GET /api/entries
const getEntries = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get entries suhn" });
});

// @desc  create new entry
// @route POST /api/entries
const postEntry = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add text field");
  }
  res.status(200).json({ message: "Create a new entry" });
});

// @desc update entry
// @route PUT /api/entries/:id
const updateEntry = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update entry # ${req.params.id}` });
});

// @desc delete entry
// @route DELETE /api/entries/:id
const deleteEntry = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete entry # ${req.params.id}` });
});

module.exports = {
  getEntries,
  postEntry,
  updateEntry,
  deleteEntry,
};
