const express = require('express');
const app = express()
const pool = require('./connection')
pool.connect().then(console.log("Success"))
const router = express.Router();
router.get('/getAllUsers',async function(req,res){
    const users = await pool.query('SELECT * FROM "Users"."Users"')
    res.status(200).json(users.rows)
});
router.get('/getUserById',async function(req,res){
    const userID = req.query.id
    const user = await pool.query('SELECT * FROM "Users"."Users" where id= $1',[userID])
    res.status(200).json(user.rows[0])
})

module.exports = router