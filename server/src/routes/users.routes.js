import { Router } from "express";
import usersController from "../controllers/users.controllers";

const router = Router();

router.get("/", usersController.getUsers);
router.post("/", usersController.createUser);
router.get("/:user_id", usersController.getUserbyId);
router.put("/:user_id", usersController.updateUser);
router.delete("/:user_id", usersController.deleteUser);

export default router;
