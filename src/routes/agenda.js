const express= require('express');
const router= express.Router();

const controller=require('../controllers/agendaController');

router.get('/', controller.list );
router.post('/add', controller.save);
router.post('/sign', controller.register);
router.get('/delete/:id', controller.delete);
router.get('/update/:id', controller.edit);
router.post('/update/:id', controller.update);
router.get('/info/:id', controller.info);
router.post('/return', controller.return);


module.exports= router;