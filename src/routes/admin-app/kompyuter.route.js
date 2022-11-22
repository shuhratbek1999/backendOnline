const express = require('express');
const router = express.Router();
const kompyuterController = require('../../controllers/admin-app/kompyuter.controller');
const auth = require('../../middleware/auth.middleware');
const Role = require('../../utils/roles.utils');
const awaitHandlerFactory = require('../../middleware/awaitHandlerFactory.middleware');
const { mebelValidation } = require('../../middleware/validators/admin-app/mebelValidator.middleware');

router.delete('/delete/:id', awaitHandlerFactory(kompyuterController.delete));
router.post('/create', mebelValidation, awaitHandlerFactory(kompyuterController.create));
router.patch('/update/:id', mebelValidation, awaitHandlerFactory(kompyuterController.update));
router.get('/all', awaitHandlerFactory(kompyuterController.getAll));
router.get('/one/:id', awaitHandlerFactory(kompyuterController.getOne));

module.exports = router;