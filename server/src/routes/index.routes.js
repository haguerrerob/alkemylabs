import { Router } from "express";
import pool from "../db";

const router = Router();

router.get("/prueba", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  console.log(result.rows[0]);
  res.json("executed");
  // pool.end();
});

export default router;
