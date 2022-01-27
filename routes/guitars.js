const express = require("express")
const router = express.Router()

const guitars = require ('../models/guitar')


router.get('/', (req, res) => {
    guitars.getGuitars(req.query)
      .then(guitar => {
        res.json(guitar)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send('Error retrieving guitars from database')
      })
  })

  router.get('/:id', (req, res) => {
    guitars
    .getById(req.params.id)
    .then(guitars => {
      if (!guitars) res.status(404).json({ message: `guitar not found` })
      else res.status(200).json(guitars)
    })
    .catch(err => {
      console.error(err)
      res
      .status(500)
      .json({ message: 'Error retrieving this guitar from database' })
    })
  })
  
  router.get('/product/:name', (req, res) => {
    let sqlValues = '%'+ req.params.name +'%'
      guitars.findByName(sqlValues)
        .then(guitar => {
          res.json(guitar)
        })
        .catch(err => {
          console.log(err)
          res.status(500).send('Error retrieving thid name from database')
        })
    })

module.exports = router