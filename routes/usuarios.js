//Rutas usuarios

const { Router } = require('express');
const { getUsuarios, putUsuarios, postUsuarios, deleteUsuarios, patchUsuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuarios);

router.put('/:id', putUsuarios);

router.patch('/' , patchUsuarios);

router.post('/', postUsuarios);

router.delete('/', deleteUsuarios);

module.exports = router;