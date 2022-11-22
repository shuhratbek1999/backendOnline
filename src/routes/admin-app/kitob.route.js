const express = require('express');
const router = express.Router();
const kitobController = require('../../controllers/admin-app/kitob.controller');
const auth = require('../../middleware/auth.middleware');
const Role = require('../../utils/roles.utils');
const awaitHandlerFactory = require('../../middleware/awaitHandlerFactory.middleware');
const { mebelValidation } = require('../../middleware/validators/admin-app/mebelValidator.middleware');

router.delete('/delete/:id', awaitHandlerFactory(kitobController.delete));
router.post('/create', mebelValidation, awaitHandlerFactory(kitobController.create));
router.patch('/update/:id', mebelValidation, awaitHandlerFactory(kitobController.update));
router.get('/all', awaitHandlerFactory(kitobController.getAll));
router.get('/one/:id', awaitHandlerFactory(kitobController.getOne));

module.exports = router;