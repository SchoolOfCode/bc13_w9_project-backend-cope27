import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_URL,
});

export default function query(text, params) {
  return pool.query(text, params);
}
