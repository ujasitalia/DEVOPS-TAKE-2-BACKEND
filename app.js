const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
app.get('/', async (req, res) => {
    res.json({
        mesg: "Hello from Backend!"
    })
})

app.listen(3000, ()=>{
    console.log("Your Server has started on http://localhost:3000");
})