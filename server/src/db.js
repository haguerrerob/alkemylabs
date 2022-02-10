import { Pool } from "pg";

import { config } from "dotenv";
config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const connectionString = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/expenses-app`;

const pool = new Pool({
  connectionString,
});

export default pool;
