const express = require('express');
const router = express.Router();
const telefonController = require('../../controllers/admin-app/telefon.controller');
const auth = require('../../middleware/auth.middleware');
const Role = require('../../utils/roles.utils');
const awaitHandlerFactory = require('../../middleware/awaitHandlerFactory.middleware');
const { mebelValidation } = require('../../middleware/validators/admin-app/mebelValidator.middleware')

router.delete('/delete/:id', awaitHandlerFactory(telefonController.delete));
router.get('/all', awaitHandlerFactory(telefonController.getAll));
router.get('/sort', awaitHandlerFactory(telefonController.sort));
router.post('/create',  mebelValidation, awaitHandlerFactory(telefonController.create));
router.patch('/update/:id', mebelValidation,  awaitHandlerFactory(telefonController.update));
router.get('/alls', awaitHandlerFactory(telefonController.getAlls));
router.get('/one/:id', awaitHandlerFactory(telefonController.getOne));

module.exports = router;