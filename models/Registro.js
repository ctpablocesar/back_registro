const { Schema, model } = require('mongoose');

const RegistroSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    mensaje: {
        type: String,
        required: true
    },
    opinion: {
        type: String,
        required: true
    }

});

RegistroSchema.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    object.id = this._id;
    return object;
});

module.exports = model('Registro', RegistroSchema);