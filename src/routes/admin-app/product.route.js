const express = require('express');
const router = express.Router();
const ProductControler = require('../../controllers/admin-app/product.controller');
const auth = require('../../middleware/auth.middleware');
const Role = require('../../utils/roles.utils');
const awaitHandlerFactory = require('../../middleware/awaitHandlerFactory.middleware');
const multer = require('multer');
const path = require('path')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
           cb(null, './upload/');
      },
     
      filename: (req, file, cb) =>{
        console.log(file);
        req.body.file = `_${Date.now()}${path.extname(file.originalname)}`;
         cb(null, req.body.file);
        }
});

var upload = multer({
    storage: storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    }
}).single('image')
// const { productValidation } = require('../../middleware/validators/admin-app/productValidator.middleware');

router.delete('/delete/id', awaitHandlerFactory(ProductControler.delete));
router.post('/create', upload,  awaitHandlerFactory(ProductControler.create));
router.patch('/update/:id',upload,  awaitHandlerFactory(ProductControler.update));
router.get('/all', awaitHandlerFactory(ProductControler.getAll));
router.get('/one/:id', awaitHandlerFactory(ProductControler.getOne));

module.exports = router;