const express = require('express');
const router = express.Router();
const regionController = require('../../controllers/admin-app/region.controller');
const auth = require('../../middleware/auth.middleware');
const Role = require('../../utils/roles.utils');
const awaitHandlerFactory = require('../../middleware/awaitHandlerFactory.middleware');

const { regionValidation } = require('../../middleware/validators/admin-app/regionValidator.middleware');

router.delete('/delete/:id', awaitHandlerFactory(regionController.delete));
router.post('/create', regionValidation,  awaitHandlerFactory(regionController.create));
router.patch('/update/:id', regionValidation,  awaitHandlerFactory(regionController.update));
router.get('/all', awaitHandlerFactory(regionController.getAll));
router.get('/one/:id', awaitHandlerFactory(regionController.getOne));

module.exports = router;