const express = require("express");
const {
  addExpense,
  getAllExpenses,
  editExpense,
  deleteExpense,
} = require("../controllers/expense");
const { protect } = require("../middlewares/auth");
const router = express.Router();

router.post("", protect, addExpense);

router.get("", protect, getAllExpenses);

router.post("/:id", protect, editExpense);
// /expenses/:id
router.delete("/:id", protect, deleteExpense);
//expenses/:id
module.exports = router;
