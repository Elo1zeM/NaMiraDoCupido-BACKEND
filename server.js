const express = require('express');
const cors = require('cors');
const path = require('path');

const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));

// Rota raiz
app.get('/', (req, res) => {

    res.json({
        mensagem: '💘 Bem-vindo à API Na Mira do Cupido!'
    });

});

// Rotas
const rotasCategorias = require('./routes/categorias');
const rotasProdutos = require('./routes/produtos');
const rotasPedidos = require('./routes/pedidos');

app.use('/api/categorias', rotasCategorias);
app.use('/api/produtos', rotasProdutos);
app.use('/api/pedidos', rotasPedidos);

app.get('/pagamento', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pagamento.html'));
});

app.get('/pedido-feito', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pedido-feito.html'));
});

app.get('/pedidos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pedidos.html'));
});

// 404
app.use((req, res) => {

    res.status(404).json({
        sucesso: false,
        mensagem: `Rota '${req.url}' não encontrada.`
    });

});

// Handler global de erro
app.use(errorHandler);

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, () => {

    console.log('🚀 ==========================================');
    console.log(`💘 API ONLINE: http://localhost:${PORTA}`);
    console.log('🚀 ==========================================');

});

module.exports = app;