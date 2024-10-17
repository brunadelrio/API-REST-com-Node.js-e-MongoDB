// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Person = require('./models/Person')

// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        entended: true
    })
)

app.use(express.json())

// rotas da API
app.post('/person', async (req, res) => {
    // req.body

    // {name: "Bruna", salary: 5000, approved: false}
    const {name, salary, approved} = req.body

    if (!name) {
        res.status(422).json({error: "O nome é obrigatório"})
    }
    if (!salary) {
        res.status(422).json({error: "O salário é obrigatório"})
    }

    const person = {
        name,
        salary,
        approved
    }

    // criando dados
    try {
        await Person.create(person)
        res.status(201).json({message: "Pessoa inserida no sistema com sucesso!"})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

// rota inicial / endpoint
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
