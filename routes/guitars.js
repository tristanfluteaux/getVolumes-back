const express = require("express")
const router = express.Router()
const Post = require ('../models/Post')

router.get('/', (req, res) => {
    try {
    const cursor = client.db("getVolumes").collection("guitars").find({
    }
    )
    res.json(cursor)
} catch (err) {
    res.json({message: err})
}
    // .sort({ last_review: -1 })
//     const results = await cursor.toArray();
//     console.log(results)
//   res.send('We are in /guitars')
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