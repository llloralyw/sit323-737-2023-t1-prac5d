var express = require('express')
var app = express()

app.use(express.static(__dirname))
var web = app.listen(6000, () =>{
    console.log('Server is listening on port', web.address().port)
} )