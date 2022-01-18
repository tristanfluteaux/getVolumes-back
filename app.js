const express = require('express');
const routes = require('./routes/index')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const connection = require('./db-config.js')
require('dotenv/config');


const app = express()

const port = process.env.PORT || 4000;


connection.connect(err => {
    if (err) {
      console.error('error connecting: ' + err.stack)
    } else {
      console.log('connected to database with threadId :  ' + connection.threadId)
    }
  })

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