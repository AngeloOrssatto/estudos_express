const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){ //Retorna todos os produtos
        const { page = 1 } = req.query; //Paginação na rota
        const products = await Product.paginate({}, { page, limit: 10 }); //Lista paginada -> ({condições}, {pagina atual, limite})  
        
        return res.json(products);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product)
    },

    async store(req, res){ //Cria um produto
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res){ //Atualiza informações de um produto
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }) //Faz retornar o atualizado

        return res.json(product)
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send(); //Retorna resposta de sucesso
    }
};