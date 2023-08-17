// routes/users.js
const express = require("express");
const router = express.Router();
const UserModel = require("../Models/UserModel");

router.post("/deleteProfile", async (req, res) => {
  try {
    // uodate the data in database
    let whereQuery = { _id: req.body._id };

    await UserModel.findByIdAndDelete(whereQuery);
    res.json({
      status: 200,
      data: "Successfully deleted",
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
