const express = require("express");
const router = express.Router();
const {
  getEntries,
  postEntry,
  updateEntry,
  deleteEntry,
} = require("../controllers/entryController");

router.route("/").get(getEntries).post(postEntry);

router.route("/:id").put(updateEntry).delete(deleteEntry);

module.exports = router;
