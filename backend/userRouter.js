const express = require("express");
const app = express();
const pool = require("./connection");
pool.connect().then(console.log("Success"));
const router = express.Router();
router.get("/getAllUsers", async function (req, res) {
  const users = await pool.query("SELECT * FROM USERS");
  res.status(200).json(users.rows);
});
router.get("/getUserById", async function (req, res) {
  const userID = req.query.id;
  const user = await pool.query("SELECT * FROM USERS where id= $1", [userID]);
  res.status(200).json(user.rows[0]);
});
router.post("/addUser", async function (req, res) {
  const data = req.body;
  const firstname = data.firstname;
  const lastname = data.lastname;
  const role = data.role;
  const location = data.location;
  const avatar = data.avatar;
  result = await pool.query(
    `INSERT INTO USERS (
         firstname, lastname, role, location, avatar) VALUES (
         $1::text, $2::text, $3::text, $4::text, $5::bytea);`,
    [firstname, lastname, role, location, avatar]
  );
  result = await pool.query(
    "SELECT avatar FROM USERS ORDER BY id DESC LIMIT 1 "
  );
  res.status(200).json(result.rows[0]);
});
module.exports = router;
