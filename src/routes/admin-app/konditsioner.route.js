const express = require('express');
const router = express.Router();
const konditsionerController = require('../../controllers/admin-app/konditsioner.controller');
const auth = require('../../middleware/auth.middleware');
const Role = require('../../utils/roles.utils');
const awaitHandlerFactory = require('../../middleware/awaitHandlerFactory.middleware');
const { mebelValidation } = require('../../middleware/validators/admin-app/mebelValidator.middleware');

router.delete('/delete/:id', awaitHandlerFactory(konditsionerController.delete));
router.post('/create', mebelValidation,  awaitHandlerFactory(konditsionerController.create));
router.patch('/update/:id', mebelValidation,  awaitHandlerFactory(konditsionerController.update));
router.get('/all', awaitHandlerFactory(konditsionerController.getAll));
router.get('/one/:id', awaitHandlerFactory(konditsionerController.getOne));

module.exports = router;