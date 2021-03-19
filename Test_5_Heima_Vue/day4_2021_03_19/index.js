    const express = require('express');
    const cors = require('cors');
    const router = express.Router()
    const app = express()

    app.use(cors())
    app.user(express.urlencoded({extended:false}))







    app.listen(80,() => {
        console.log('server in "http://127.0.0.1:80"')
    })