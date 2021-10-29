const express = require("express")
const router = express.Router()

const guitar = require ('../models/guitar')

/* Get all */
router.get('/', async (req, res) => {
    try {
        const result = await guitar.find({})
        res.send(result)
        // const results = await result.toArray();
        // res.send(results)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

/* Get One */
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const result = await guitar.findOne({_id : id})
    console.log(result)
    res.send(result)
})

/* Create one */
router.post('/', (req, res) => {
    console.log(req.body)
    // const post = new Post({
    //     name: req.body.name,
    //     price: req.body.price,
    //     type: req.body.type,
    //     brend: req.body.brend,
    //     color: req.body.color,
    //     quantity: req.body.quantity,
    //     desc: req.body.desc
    // })
    // post.save()
    //     .then(data => {
    //         res.json(data)
    //     })
    //     .catch(err => {
    //         res.json({message: err})
    //     })
})

module.exports = router