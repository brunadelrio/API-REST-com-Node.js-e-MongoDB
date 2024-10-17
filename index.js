// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        entended: true
    })
)

app.use(express.json())

// rota/endpoint inicial
app.get('/', (req, res) => {
    res.json({ message: "Oi Express!" })
})

// entregar uma porta 
mongoose.connect("mongodb+srv://brunaadelrio:7BUgiyI3EB4uVQhZ@apicluster.medvj.mongodb.net/",
)
.then(() => {
    console.log("Conectamos ao MongoDB!")
    app.listen(3000)
})
.catch((err) => console.log(err))
