const express = require('express')
const app = express()

app.get('/', async (req, res) => {
    res.json({
        mesg: "Hello from Backend!!"
    })
})

app.listen(3000, ()=>{
    console.log("Your Server has started on http://localhost:3000");
})