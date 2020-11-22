const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ClientSchema.plugin(mongoosePaginate);//Plugin para paginação

mongoose.model('Client', ClientSchema)