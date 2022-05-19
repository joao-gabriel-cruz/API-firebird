const express = require('express')
const app = express()

app.listen(7777)

app.get('/', (req,res) => res.send('hello'))