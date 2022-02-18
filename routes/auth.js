const express = require("express");
const Auth = require("../models/Auth");
const router = express.Router();
const { hashPassword, verifyPassword } = require("../service/Argon2");
const { createToken, verifyToken } = require("../service/Jwt")
const mysql = require("..//db-config")

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Auth.findByEmail(email);
    if (user) {
      throw new Error("DUPLICATA");
    }
    const hashedPassword = await hashPassword(password);
    await Auth.create(email, hashedPassword);
    return res.status(201).json("User created");
  } catch (error) {
    if (error.message === "DUPLICATA")
      return res
        .status(401)
        .json("email alerady exist");
        return res.status(500).json(error);
    
  }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await Auth.findByEmail(email);
      if (!user || user.length <= 0) {
        throw new Error("NOT_FOUND");
      }
      const verifyedPassword = await verifyPassword(user.user_password, password);
      if (!verifyedPassword) {
        throw new Error("WRONG_CREDENTIALS");
      } else {
        const access_token = createToken(email, user.id);
        return res.status(200).json({ access_token: access_token });
      }
    } catch (error) {
      if (error.message === "WRONG_CREDENTIALS") {
        return res.status(401).json("Email et Password ne correspondent pas");
      }

      return res.status(500).json("Error server");
    }
  });

  router.get('/isUserAuth', verifyToken, async (req, res) => {
    try {
      return res.status(200).json('Your Authenticated!')
    } catch (error) {
      return res.status(500).json('Wrong token')
    }
  })
  router.get('/', (req, res) => {
    Auth.getInfo(req.query)
      .then(user => {
        res.json(user)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send('Error retrieving users from database')
      })
  })

  router.get('/:id', (req, res) => {
    Auth
    .findOne(req.params.id)
    .then(user => {
      if (!user) res.status(404).json({ message: `user not found` })
      else res.status(200).json(user)
    })
    .catch(err => {
      console.error(err)
      res
      .status(500)
      .json({ message: 'Error retrieving this user from database' })
    })
  })



  router.put('/:id', (req, res) => {
    const  id  = req.params.id
    const infoToUpdate = req.body;
    const sql = 'UPDATE users SET ? WHERE id = ?'
    console.log(req.body)
    mysql.query(sql, [infoToUpdate, id],  (err, result) => {
        if (err) {
          console.log(err)
            res.status(500).send('Error updating users from db')
        } else {
            console.table(result)
            res.status(200).json(result)
        }
    })
})

module.exports = router;
