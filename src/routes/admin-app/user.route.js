const express = require('express');
const router = express.Router();
const userController = require('../../controllers/admin-app/user.controller');
const auth = require('../../middleware/auth.middleware');
const Role = require('../../utils/roles.utils');
const awaitHandlerFactory = require('../../middleware/awaitHandlerFactory.middleware');

const { validateLogin } = require('../../middleware/validators/admin-app/userValidator.middleware');
const { Registratsiya } = require('../../middleware/validators/admin-app/RegisterValidator.middleware');

router.post('/login', validateLogin, awaitHandlerFactory(userController.userLogin));
router.post('/create', Registratsiya,  awaitHandlerFactory(userController.create));
router.patch('/update/:id',  awaitHandlerFactory(userController.update));
router.get('/all',  awaitHandlerFactory(userController.getAll));
router.get('/one/:id',  awaitHandlerFactory(userController.getOne));

module.exports = router;