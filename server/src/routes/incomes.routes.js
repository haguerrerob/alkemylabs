import { Router } from "express";
import incomesController from "../controllers/incomes.controllers";

const router = Router();

router.get("/", incomesController.getIncomes);
router.post("/", incomesController.createIncome);
router.get("/:income_id", incomesController.getIncomebyId);
router.put("/:income_id", incomesController.updateIncome);
router.delete("/:income_id", incomesController.deleteIncome);

export default router;
