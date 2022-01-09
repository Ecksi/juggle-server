import { Pool } from "pg";

const pool = new Pool({
  user: "juggler",
  password: "juggleCat",
  host: "localhost",
  port: 5432,
  database: "juggledb",
});

export default pool;
