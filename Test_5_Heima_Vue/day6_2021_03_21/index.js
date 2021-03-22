const express = require('express');
const cors = require('cors')
const app = express()
const router = express.Router()

app.use(cors())
app.use(express.urlencoded({extended:false}))




app.get('/adata',(req,res) => {
    res.send('hello')
})
app.delete('/axios',(req,res) => {
    res.send('hello' + req.query.id)
})
app.post('/axios',(req,res) => {
    res.send(req.body.uname + '---' + req.body.age)
})






app.listen(80,() => {
    console.log('http://127.0.0.1:80')
})