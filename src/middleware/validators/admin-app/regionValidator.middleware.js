const { body } = require('express-validator');

exports.regionValidation = [
    body('name')
        .exists()
        .isString()
        .isLength({ min: 4, max: 30})
        .withMessage('Must be [3: 30] chars long'),
];