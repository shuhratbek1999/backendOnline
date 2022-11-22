const express = require('express');
const router = express.Router();
const deliverController = require('../../controllers/admin-app/deliver.controller');
const auth = require('../../middleware/auth.middleware');
const Role = require('../../utils/roles.utils');
const awaitHandlerFactory = require('../../middleware/awaitHandlerFactory.middleware');


router.delete('/delete/:id', awaitHandlerFactory(deliverController.delete));
router.post('/create',  awaitHandlerFactory(deliverController.create));
router.patch('/update/:id',  awaitHandlerFactory(deliverController.update));
router.get('/all', awaitHandlerFactory(deliverController.getAll));
router.get('/one/:id', awaitHandlerFactory(deliverController.getOne));

module.exports = router;