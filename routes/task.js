const express = require('express');
const router = express.Router();
const {validarJWT} = require('../middlewares/validar-token')
const {listarTareas, crearTarea, actualizarTarea, eliminarTarea} = require('../Controllers/task')

router.use(validarJWT)

router.get('/', validarJWT, listarTareas)
router.post('/', crearTarea)
router.put('/:id', actualizarTarea)
router.delete('/:id', eliminarTarea)

module.exports = router;