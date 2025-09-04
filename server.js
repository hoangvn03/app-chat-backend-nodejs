const express = require('express')
// const cors = require('cors')
import cors from 'cors'
require('dotenv').config()
const initRoutes = require('./router/index')
const { connectDatabase } = require('./config/connect');

const app = express()

app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

// CRUD
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRoutes(app)

const PORT = process.env.PORT || 8888

const listener = app.listen(PORT, () => {
  console.log('Server is running on the port ' + listener.address().port)
})
