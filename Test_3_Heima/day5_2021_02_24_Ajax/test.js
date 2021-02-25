const express = require("express")
const app = express()

app.get("/data",(req, res) => {
    var cb = req.query.callback
    console.log(cb)
    res.send(cb + "()")
})

app.listen(8080)
console.log("http://127.0.0.1:8080");