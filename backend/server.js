const express = require('express')
const app = express()
const cors = require('cors')

const router = require('./api/restaurants_Router')


app.use(cors())
app.use(express.json())

app.use('/a2mbrother/v1/restaurants',router)
app.use('*',(req,res)=>res.status(404).json({error : 'Not Found'}))

module.exports = app