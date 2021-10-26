const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const port = process.env.PORT || 4000;

connection.connect (err => {
    if(err) {
        console.error('error connecting: ' + err.stack)
    } else {
        console.log('connected')
    }
})

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});