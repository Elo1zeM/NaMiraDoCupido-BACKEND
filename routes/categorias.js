const express = require('express');
const router = express.Router();
const db = require('../backend/data/database');

router.get('/', async (req, res, next) => {
    try {
        const { data, error } = await supabase
            .from('categorias1')
            .select('*')
            .order('id', { ascending: true });

        if (error) throw error;
        res.json(data);
    } catch (err) {
        next(err); // Repassa para o seu errorHandler
    }
});

module.exports = router;
