const express = require('express');
const router = express.Router();

const supabase = require('../data/supabase');

router.get('/', async (req, res, next) => {

    try {

        const { data, error } = await supabase
            .from('categorias1')
            .select('*')
            .order('id', { ascending: true });

        if (error) throw error;

        res.json(data);

    } catch (err) {

        next(err);

    }

});

module.exports = router;
