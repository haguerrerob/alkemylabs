import pool from "../db";

const incomesController = {};

incomesController.getIncomes = async (req, res) => {
  try {
    const incomes = (await pool.query("SELECT * FROM incomes")).rows;
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
};

incomesController.getIncomebyId = async (req, res) => {
  const { income_id } = req.params;
  try {
    const income = (
      await pool.query(`SELECT * FROM incomes WHERE id_income = ${income_id}`)
    ).rows[0];
    console.log(income);
    income
      ? res.status(200).json(income)
      : res.status(500).json({
          message: "Income not found",
        });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

incomesController.createIncome = async (req, res) => {
  const { income_concept, income_mount, user_id } = req.body;
  try {
    const income = await pool.query(
      "INSERT INTO incomes (income_concept, income_mount, user_id) VALUES ($1, $2, $3)",
      [income_concept, income_mount, user_id]
    );
    res.json(income);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

incomesController.deleteIncome = async (req, res) => {
  const { income_id } = req.params;
  try {
    const income = (
      await pool.query(`DELETE FROM incomes WHERE id_income = ${income_id}`)
    ).rows;
    res.send(income);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

incomesController.updateIncome = async (req, res) => {
  const { income_id } = req.params;
  const { income_concept, income_mount, user_id, income_date } = req.body;
  try {
    const incomeUpdate = await pool.query(
      "UPDATE incomes SET income_concept = $1, income_mount = $2, user_id = $3, income_date = $4 WHERE id_income = $5",
      [income_concept, income_mount, user_id, income_date, income_id]
    );
    res.status(200).json(incomeUpdate);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default incomesController;
