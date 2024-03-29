'use strict'

const express = require('express');
const router = express.Router() // criando variavel que recebe rotas
const controller = require('../controllers/surfistas-controller');


//configurando rotas
router.get ('/obter_surfista', controller.obter_surfista);
router.get ('/obter_surfista_pais', controller.obter_surfista_pais);
router.post ('/cadastrar_surfista', controller.cadastrar_surfista);
router.put ('/editar_surfista/:numero', controller.editar_surfista);
router.put ('/editar_surfista_pais/:numero', controller.editar_surfista_pais);
router.delete ('/deletar_surfista/:numero', controller.deletar_surfista);

module.exports = router;

