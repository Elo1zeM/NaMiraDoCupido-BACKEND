let categorias1 = [
    { id: 1, nome: 'Ingressos' },
    { id: 2, nome: 'Cartas' },
    { id: 3, nome: 'Presentes' },
];

let produtos1 = [
    // --- INGRESSOS (Categoria 1) ---
    {
        id: 1,
        categoriaId: 1,
        nome: 'Ingresso Individual',
        descricao: "Válido para uma entrada na Barraca do Beijo.",
        preco: 5.00,
        imagem: 'ticket.png'
    },

    // --- CARTAS (Categoria 2) ---
    {
        id: 2,
        categoriaId: 2,
        nome: 'Correio Elegante',
        descricao: "Uma carta física entregue pelo nosso Cupido.",
        preco: 2.00,
        imagem: 'dec.png'
    },

    // --- PRESENTES (Categoria 3) ---
    {
        id: 3,
        categoriaId: 3,
        nome: 'Urso Apaixonado',
        descricao: "Urso de pelúcia fofinho com um coração.",
        preco: 45.00,
        imagem: './frontend/assets/img/urso.png'
    },
    {
        id: 4,
        categoriaId: 3,
        nome: 'Caixa de Bombom',
        descricao: "Bombons artesanais para adoçar o dia.",
        preco: 25.50,
        imagem: './frontend/assets/img/bombom.png'
    },
    {
        id: 5,
        categoriaId: 3,
        nome: 'Buque de Flor',
        descricao: "Um buque para alegrar seu dia.",
        preco: 3.00,
        imagem: './frontend/assets/img/buque.png'
    }
];

module.exports = { categorias1, produtos1 };