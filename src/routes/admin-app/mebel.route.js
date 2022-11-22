const express = require('express');
const router = express.Router();
const mebelController = require('../../controllers/admin-app/mebel.controller');
const auth = require('../../middleware/auth.middleware');
const Role = require('../../utils/roles.utils');
const awaitHandlerFactory = require('../../middleware/awaitHandlerFactory.middleware');

const { mebelValidation } = require('../../middleware/validators/admin-app/mebelValidator.middleware');

router.delete('/delete/:id', awaitHandlerFactory(mebelController.delete));
router.post('/create', mebelValidation,  awaitHandlerFactory(mebelController.create));
router.patch('/update/:id', mebelValidation,  awaitHandlerFactory(mebelController.update));
router.get('/all', awaitHandlerFactory(mebelController.getAll));
router.get('/one/:id', awaitHandlerFactory(mebelController.getOne));

module.exports = router;