const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "pass",
  database: "Users",
  port: 5432,
});
module.exports = pool;
