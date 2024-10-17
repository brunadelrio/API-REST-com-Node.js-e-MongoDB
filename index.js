// config inicial
const express = require('express')
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
    res.json({ message: "oi express!" })
})

// entregar uma porta 
app.listen(3000)