require('dotenv').config()

console.log('hello')
const express = require('express')


const server = express()

server.use(express.json())
console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
    const cors = require('cors')
    server.use(cors())
}
