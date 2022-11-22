const express = require('express');
const router = express.Router();
const buyurtmaController = require('../../controllers/admin-app/buyurtma.controller');
const auth = require('../../middleware/auth.middleware');
const Role = require('../../utils/roles.utils');
const awaitHandlerFactory = require('../../middleware/awaitHandlerFactory.middleware');

const { buyurtmaValidation } = require('../../middleware/validators/admin-app/buyurtmaValidator.middleware');

router.delete('/delete/:id', awaitHandlerFactory(buyurtmaController.delete));
router.post('/create',  awaitHandlerFactory(buyurtmaController.create));
router.patch('/update/:id', buyurtmaValidation,  awaitHandlerFactory(buyurtmaController.update));
router.get('/all', awaitHandlerFactory(buyurtmaController.getAll));
router.get('/one/:id', awaitHandlerFactory(buyurtmaController.getOne));

module.exports = router;