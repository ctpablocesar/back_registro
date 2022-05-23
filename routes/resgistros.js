const { Router, response } = require('express');
const { check } = require('express-validator');
const { crearRegistro } = require('../controllers/registros');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('telefono', 'El telefono es obligatorio').not().isEmpty(),
        check('correo', 'El email es obligatorio').not().isEmpty(),
        check('mensaje', 'El mensaje es obligatorio').not().isEmpty(),
        check('opinion', 'La opinion es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearRegistro);

module.exports = router; 