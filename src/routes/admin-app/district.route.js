const express = require('express');
const router = express.Router();
const districtController = require('../../controllers/admin-app/district.controller');
const auth = require('../../middleware/auth.middleware');
const Role = require('../../utils/roles.utils');
const awaitHandlerFactory = require('../../middleware/awaitHandlerFactory.middleware');

const { districtValidation } = require('../../middleware/validators/admin-app/districtValidator.middleware');

router.delete('/delete/:id', awaitHandlerFactory(districtController.delete));
router.post('/create', districtValidation, awaitHandlerFactory(districtController.create));
router.patch('/update/:id', districtValidation,  awaitHandlerFactory(districtController.update));
router.get('/all', awaitHandlerFactory(districtController.getAll));
router.get('/one/:id', awaitHandlerFactory(districtController.getOne));

module.exports = router;