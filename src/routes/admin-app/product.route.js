const express = require('express');
const router = express.Router();
const ProductControler = require('../../controllers/admin-app/product.controller');
const auth = require('../../middleware/auth.middleware');
const Role = require('../../utils/roles.utils');
const awaitHandlerFactory = require('../../middleware/awaitHandlerFactory.middleware');

const { productValidation } = require('../../middleware/validators/admin-app/productValidator.middleware');

router.delete('/delete/id', awaitHandlerFactory(ProductControler.delete));
router.post('/create', productValidation,  awaitHandlerFactory(ProductControler.create));
router.patch('/update/:id', productValidation,  awaitHandlerFactory(ProductControler.update));
router.get('/all', awaitHandlerFactory(ProductControler.getAll));
router.get('/one/:id', awaitHandlerFactory(ProductControler.getOne));

module.exports = router;