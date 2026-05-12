const express = require('express');
const router = express.Router();

const supabase = require('../data/supabase');

// Listar pedidos
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

// Criar pedido
router.post('/', async (req, res, next) => {

    try {

        const { data, error } = await supabase
            .from('pedidos1')
            .insert([req.body])
            .select();

        if (error) throw error;

        const novoPedido = data[0];

        console.log("\n💘 ==========================================");
        console.log("💘 NOVO PEDIDO RECEBIDO!");
        console.log(`💘 De: ${novoPedido.cliente || 'Anônimo'}`);
        console.log(`💘 Carta: ${novoPedido.mensagem_carta || 'Sem mensagem'}`);
        console.log(`💘 Total: R$ ${novoPedido.total}`);
        console.log("💘 ==========================================\n");

        res.status(201).json({
            sucesso: true,
            mensagem: 'Pedido recebido com sucesso!',
            pedido: novoPedido
        });

    } catch (err) {

        next(err);

    }

});

module.exports = router;