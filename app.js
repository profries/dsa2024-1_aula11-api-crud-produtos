const express = require('express');
const app = express();
const PORTA = 3000;

app.use(express.json()) // for parsing application/json

let listaProdutos = [
    {
        id: 1,
        nome: "arroz",
        categoria: "alimento",
        preco: 5.40
    },
    {
        id: 2,
        nome: "leite",
        categoria: "bebida",
        preco: 4.70
    }    
]

app.get("/produtos", (req, res) => {
    res.json(listaProdutos)
})

app.post("/produtos", (req, res) => {
    let produto = req.body;
    
    produto.id= 3;
    listaProdutos.push(produto);

    res.status(201).json(produto);
    
})

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id;
    if(id == 1) {
        res.json(listaProdutos[0]);
    }
    else if(id == 2) {
        res.json(listaProdutos[1]);
    }
    else {
        res.status(404).json({erro: "Produto nao encontrado"})
    }
})

app.listen(PORTA, ()=> {
    console.log("Iniciando o servidor na porta "+PORTA);
})
