import pool from "../db";

const usersController = {};

usersController.getUsers = async (req, res) => {
  try {
    const users = (await pool.query("SELECT * FROM users")).rows;
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

usersController.getUserbyId = async (req, res) => {
  const { user_id } = req.params;
  try {
    const user = (
      await pool.query(`SELECT * FROM users WHERE id_user = ${user_id}`)
    ).rows[0];
    console.log(user);
    user
      ? res.status(200).json(user)
      : res.status(500).json({
          message: "User not found",
        });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

usersController.createUser = async (req, res) => {
  const { user_name, user_email, user_password } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3)",
      [user_name, user_email, user_password]
    );
    res.json(result);
  } catch (error) {
    error.constraint === "users_user_email_key"
      ? res.status(500).json({
          message: "Someone is already using that email",
          detail: error.detail,
        })
      : res.status(500).send(error.message);
  }
};

usersController.deleteUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    const user = (
      await pool.query(`DELETE FROM users WHERE id_user = ${user_id}`)
    ).rows;
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

usersController.updateUser = async (req, res) => {
  const { user_id } = req.params;
  const { user_name, user_email, user_password } = req.body;
  try {
    const userUpdate = await pool.query(
      "UPDATE users SET user_name = $1, user_email = $2, user_password = $3 WHERE id_user = $4",
      [user_name, user_email, user_password, user_id]
    );
    res.status(200).json(userUpdate);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default usersController;
