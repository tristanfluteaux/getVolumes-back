const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index')
const bodyParser = require('body-parser')
// const cors = require('cors')
// const morgan = require('morgan')
require('dotenv/config');


const app = express()

const port = process.env.PORT || 4000;


mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log('connected to mongoDB')
)

// connection.connect (err => {
//     if(err) {
//         console.error('error connecting: ' + err.stack)
//     } else {
//         console.log('connected')
//     }
// })

// connection.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })

app.use(bodyParser.json())
// app.use(cors())
// app.use(morgan('tiny'))
// app.use(express.json())
// app.use(express.urlencoded({ extended : true })).

app.use("/guitars", routes.guitars)

app.get('/', (req, res) => {
    res.send('We are in /')
})



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});