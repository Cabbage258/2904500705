const express = require('express')
const app = express()
//app.use(express.static('clock'))
app.get('/',(req,res) => {
    res.send(req.query)     //
}).get('/user/:id',(req,res) => {
    res.send(req.params)
})


app.listen(80,() => {
    console.log('express server running at http://127.0.0.1:80')
})
