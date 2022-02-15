import { Router } from "express";
import expensesController from "../controllers/expenses.controllers";

const router = Router();

router.get("/", expensesController.getExpenses);
router.post("/", expensesController.createExpense);
router.get("/:expenses_id", expensesController.getExpensebyId);
router.put("/:expenses_id", expensesController.updateExpense);
router.delete("/:expenses_id", expensesController.deleteExpense);

export default router;
