const express = require('express');
const router = express.Router();
let db = require('../backend/data/database');

// Rota de teste de erro personalizada para o Cupido
router.get('/erro-teste', (req, res) => {
    throw new Error("O Cupido errou a flecha! Erro no servidor.");
});

// Listar todos os produtos ou filtrar por categoria
router.get('/', (req, res) => {
    const categoriaId = req.query.categoriaId;

    if (categoriaId) {
        const produtosFiltrados = db.produtos1.filter(p => p.categoriaId == categoriaId);
        return res.json(produtosFiltrados);
    }

    res.json(db.produtos);
});

// Buscar produto por ID
router.get('/:id', (req, res) => {
    const produtoId = parseInt(req.params.id);
    const produto = db.produtos1.find(p => p.id === produtoId);

    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ mensagem: 'Mimo não encontrado.' });
    }
});

// Adicionar novo produto (POST)
router.post('/', (req, res) => {
    const novoId = db.produtos1.length > 0
        ? Math.max(...db.produtos1.map(p => p.id)) + 1
        : 1;

    const novoProduto = {
        id: novoId,
        categoriaId: req.body.categoriaId,
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        imagem: req.body.imagem
    };

    db.produtos1.push(novoProduto);
    res.status(201).json(novoProduto);
});

// Deletar produto (DELETE)
router.delete('/:id', (req, res) => {
    const produtoId = parseInt(req.params.id);
    db.produtos = db.produtos1.filter(p => p.id !== produtoId);
    res.json({ mensagem: 'Removido com sucesso!' });
});

module.exports = router;