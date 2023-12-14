const asyncHandler = require("express-async-handler");
const Entry = require("../models/entryModel");

// @desc get all blog entries
// @route GET /api/entries
const getEntries = asyncHandler(async (req, res) => {
  const entries = await Entry.find();
  res.status(200).json(entries);
});

// @desc  create new entry
// @route POST /api/entries
const postEntry = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.title) {
    res.status(400);
    throw new Error("please add text field");
  }
  const entry = await Entry.create({
    title: req.body.title,
    subject: req.body.subject,
    date: req.body.date,
    image: req.body.image,
    entryBody: req.body.entryBody,
    links: req.body.links,
    tags: req.body.tags,
  });

  res.status(200).json(entry);
});

// @desc update entry
// @route PUT /api/entries/:id
const updateEntry = asyncHandler(async (req, res) => {
  const entry = await Entry.findById(req.params.id);

  if (!entry) {
    res.status(400);
    throw new Error("entry not found");
  }

  const updatedEntry = await Entry.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedEntry);
});

// @desc delete entry
// @route DELETE /api/entries/:id
const deleteEntry = asyncHandler(async (req, res) => {
  const entry = await Entry.findById(req.params.id);

  if (!entry) {
    res.status(400);
    throw new Error("entry not found - entry not deleted");
  }

  await entry.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getEntries,
  postEntry,
  updateEntry,
  deleteEntry,
};
