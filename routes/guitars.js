const express = require("express")
const router = express.Router()

const guitar = require ('../models/guitar')

router.get('/', async (req, res) => {
    try {
        const cursor = await guitar.find({})
        res.send(cursor)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
    // const results = await cursor.toArray();
    // console.log(results)
})


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