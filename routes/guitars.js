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
  
  router.get('/type', (req, res) => {
      guitars.getByType(req.query)
        .then(guitar => {
          res.json(guitar)
        })
        .catch(err => {
          console.log(err)
          res.status(500).send('Error retrieving types from database')
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

// /* Get all */
// router.get('/', async (req, res) => {
//     try {
//         const result = await guitar.find({})
//         res.send(result)
//         // const results = await result.toArray();
//         // res.send(results)
//     } catch (err) {
//         res.status(500).json({message: err.message})
//     }
// })

// /* Get One */
// router.get('/:id', async (req, res) => {
//     const id = req.params.id
//     const result = await guitar.findOne({_id : id})
//     console.log(result)
//     res.send(result)
// })

// /* Create one */
// router.post('/', (req, res) => {
//     console.log(req.body)
//     // const post = new Post({
//     //     name: req.body.name,
//     //     price: req.body.price,
//     //     type: req.body.type,
//     //     brend: req.body.brend,
//     //     color: req.body.color,
//     //     quantity: req.body.quantity,
//     //     desc: req.body.desc
//     // })
//     // post.save()
//     //     .then(data => {
//     //         res.json(data)
//     //     })
//     //     .catch(err => {
//     //         res.json({message: err})
//     //     })
// })

module.exports = router