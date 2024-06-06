const express = require('express');
const app = express();
const PORTA = 3000;

const produtoService = require('./service/produto_service');

app.use(express.json()) // for parsing application/json

app.get("/produtos", (req, res) => {
    res.json(produtoService.listar());
})

app.post("/produtos", (req, res) => {
    let produto = req.body;
    
    try {
        const produtoInserido = produtoService.inserir(produto);
        res.status(201).json(produtoInserido);
    } 
    catch (err) {
        res.status(err.id).json(err);
    }
})

app.get("/produtos/:id", (req, res) => {
    const id = +req.params.id;
    
    try{
        const produtoComId = produtoService.buscarPorId(id);
        res.json(produtoComId);
    }
    catch(err) {
        res.status(err.id).json(err);
    }
})

app.listen(PORTA, ()=> {
    console.log("Iniciando o servidor na porta "+PORTA);
})
