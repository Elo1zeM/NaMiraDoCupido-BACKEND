// =============================================================
// server.js — Servidor Principal da API Na Mira do Cupido 💘
// =============================================================

const express = require('express');
const cors = require('cors');

// Importação dos Middlewares
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middlewares Globais
app.use(cors());
app.use(express.json());
app.use(logger);

// Rota Raiz
app.get('/', (req, res) => {
    res.json({ mensagem: '💘 Bem-vindo à API Na Mira do Cupido - Edição Arraiá 2026!' });
});

// Importação e Registro das Rotas
const rotasCategorias = require('./routes/categorias');
const rotasProdutos = require('./routes/produtos');
const rotasPedidos = require('./routes/pedidos'); // Rota que vai salvar as cartas

app.use('/api/categorias', rotasCategorias);
app.use('/api/produtos', rotasProdutos);
app.use('/api/pedidos', rotasPedidos);

// Erro 404 - Rota Não Encontrada
app.use((req, res, next) => {
    res.status(404).json({
        sucesso: false,
        mensagem: `A flecha do Cupido errou! Rota '${req.url}' não encontrada.`
    });
});

// Erro Global
app.use(errorHandler);

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, () => {
    console.log('🚀 ==========================================');
    console.log(`💘 CUPIDO ONLINE EM: http://localhost:${PORTA}`);
    console.log('🚀 ==========================================');
    console.log('📋 Rotas da Barraca:');
    console.log(`   /api/categorias - As abas do site`);
    console.log(`   /api/produtos   - Ingressos, Cartas e Mimos`);
    console.log(`   /api/pedidos    - Onde as cartas são salvas`);
});

module.exports = app;