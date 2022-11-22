const { body } = require('express-validator');

exports.productValidation = [
    body('title')
        .exists()
        .isString()
        .isLength({ min: 4, max: 60})
        .withMessage('Must be [3: 30] chars long'),
    body('desc')
        .exists()
        .isString()
        .withMessage('title is required')
        .notEmpty()
        .withMessage('title must be filled'),
    body('categories')
        .exists()
        .isString()
        .withMessage('categories is required')
        .notEmpty()
        .withMessage('categories must be filled'),
    body('price')
        .exists()
        .isDecimal()
        .withMessage('price is required')
        .notEmpty()
        .withMessage('price must be filled'),
    body('color')
        .exists()
        .isString()
        .withMessage('color is required')
        .notEmpty()
        .withMessage('color must be filled')
];