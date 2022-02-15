import { Pool } from "pg";

import dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const connectionString = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/expenses`;

const pool = new Pool({ connectionString });

export default pool;
