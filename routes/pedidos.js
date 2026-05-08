const express = require('express');
const router = express.Router();
const supabase = require('../backend/data/supabase');

// [GET] Listar todos os pedidos (Útil para o seu painel de controle/Cupido)
router.get('/', async (req, res, next) => {
    try {
        const { data, error } = await supabase
            .from('pedidos1')
            .select('*')
            .order('id', { ascending: false });

        if (error) throw error;
        res.json(data);
    } catch (err) {
        next(err);
    }
});

// [POST] Criar um novo pedido (Salva a Carta e os itens)
router.post('/', async (req, res, next) => {
    try {
        // O corpo da requisição deve conter: cliente, total, mensagem_carta, is_anonimo, itens
        const { data, error } = await supabase
            .from('pedidos1')
            .insert([req.body])
            .select();

        if (error) throw error;

        // --- SISTEMA DE AVISO NO TERMINAL ---
        const novoPedido = data[0];
        console.log("\n💘 ==========================================");
        console.log("💘 NOVO PEDIDO RECEBIDO!");
        console.log(`💘 De: ${novoPedido.cliente || 'Anônimo'}`);
        console.log(`💘 Carta: ${novoPedido.mensagem_carta || 'Sem mensagem'}`);
        console.log(`💘 Total: R$ ${novoPedido.total}`);
        console.log("💘 ==========================================\n");

        res.status(201).json({
            sucesso: true,
            mensagem: 'Pedido e Carta recebidos com sucesso!',
            pedido: novoPedido
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;