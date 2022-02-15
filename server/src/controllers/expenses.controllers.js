import pool from "../db";

const expensesController = {};

expensesController.getExpenses = async (req, res) => {
  try {
    const expenses = (
      await pool.query(
        "SELECT * FROM expenses JOIN (SELECT id_category, category_type FROM categories) AS T ON category_id = id_category "
        // "SELECT id_expenses, expenses_concept, expenses_mount, user_id, category_type FROM expenses JOIN categories ON category_id = id_category;"
      )
    ).rows;
    console.log(expenses);
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
};

expensesController.getExpensebyId = async (req, res) => {
  const { expenses_id } = req.params;
  try {
    const expense = (
      await pool.query(
        `SELECT * FROM expenses JOIN categories ON category_id = id_category WHERE id_expenses = ${expenses_id}`
        // `SELECT expenses_concept, expenses_mount, user_id, category_type FROM expenses JOIN categories ON category_id = id_category WHERE id_expenses = ${expenses_id}`
      )
    ).rows[0];
    expense
      ? res.status(200).json(expense)
      : res.status(500).json({
          message: "expense not found",
        });
  } catch (error) {
    res.status(500).send(error);
  }
};

expensesController.createExpense = async (req, res) => {
  const { expenses_concept, expenses_mount, user_id, category_id } = req.body;
  try {
    const expense = await pool.query(
      // `INSERT INTO expenses (expenses_concept, expenses_mount, user_id, category_id, expenses_date) VALUES ($1, $2, $3,$4, $5)`,
      // [expenses_concept, expenses_mount, user_id, category_id, expenses_date]
      `INSERT INTO expenses (expenses_concept, expenses_mount, user_id, category_id) VALUES ($1, $2, $3,$4)`,
      [expenses_concept, expenses_mount, user_id, category_id]
    );
    res.json({
      msg: "expenses_concept",
      body: req.body,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

expensesController.deleteExpense = async (req, res) => {
  const { expenses_id } = req.params;
  try {
    const expense = (
      await pool.query(
        `DELETE FROM expenses WHERE id_expenses = ${expenses_id}`
      )
    ).rows[0];
    res.send(expense);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

expensesController.updateExpense = async (req, res) => {
  const { expenses_id } = req.params;
  const {
    expenses_concept,
    expenses_mount,
    user_id,
    category_id,
    expenses_date,
  } = req.body;
  try {
    const expenseUpdate = await pool.query(
      "UPDATE expenses SET expenses_concept = $1, expenses_mount = $2, user_id = $3, category_id = $4, expenses_date = $5 WHERE id_expenses = $6",
      [
        expenses_concept,
        expenses_mount,
        user_id,
        category_id,
        expenses_date,
        expenses_id,
      ]
    );
    res.status(200).json({
      msg: "expense modified",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default expensesController;
