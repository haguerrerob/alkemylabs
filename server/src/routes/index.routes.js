import { Router } from "express";

import usersRouter from "./users.routes";
import incomesRouter from "./incomes.routes";
import expensesRouter from "./expenses.routes";

const router = Router();

router.use("/users", usersRouter);
router.use("/incomes", incomesRouter);
router.use("/expenses", expensesRouter);

export default router;
