const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
require('dotenv/config');


const app = express()

const port = process.env.PORT || 4000;


mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log('connected to mongoDB')
)

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(cookieParser())
app.use('/static', express.static(__dirname + '/public'))

app.use("/guitars", routes.guitars)
app.use("/auth", routes.login);

app.get('/', (req, res) => {
    res.send('We are in Home')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});