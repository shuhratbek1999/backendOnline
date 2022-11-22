const { body } = require('express-validator');

exports.mebelValidation = [
    body('title')
        .exists()
        .isString()
        .withMessage('stringda kiriting')
        .isLength({ min: 4, max: 150})
        .withMessage('Must be [3: 30] chars long'),
    body('desc')
        .exists()
        .isString()
        .withMessage('stringda kiriting')
        .notEmpty()
        .withMessage('desc must be filled'),
    body('price')
        .exists()
        .isDecimal()
        .withMessage('number kiriting')
];