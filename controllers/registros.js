const { response } = require('express');
const Registro = require('../models/Registro');

const crearRegistro = async (req, res = response) => {

    const registro = new Registro(req.body);

    try {

        const registroGuardado = await registro.save();

        res.json({
            ok: true,
            msg: registroGuardado
        });

    } catch (error) {
    
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor'
        });
    
    }

}

module.exports = {
    crearRegistro
}