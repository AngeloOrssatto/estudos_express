const mongoose = require('mongoose');
const Client = mongoose.model('Client');

module.exports = {
    async index(req, res){ //Retorna todos os produtos
        const { page = 1 } = req.query; //Paginação na rota
        const clients = await Client.paginate({}, { page, limit: 10 }); //Lista paginada -> ({condições}, {pagina atual, limite})  
        
        return res.json(clients);
    },

    async show(req, res){
        const clients = await Client.findById(req.params.id);

        return res.json(clients)
    },

    async store(req, res){ //Cria um produto
        const client = await Client.create(req.body);

        return res.json(client);
    },

    async update(req, res){ //Atualiza informações de um produto
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true }) //Faz retornar o atualizado

        return res.json(client)
    },

    async destroy(req, res){
        await Client.findByIdAndRemove(req.params.id);

        return res.send(); //Retorna resposta de sucesso
    }
}