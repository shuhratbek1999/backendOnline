const { body } = require('express-validator');

exports.districtValidation = [
    body('region_id')
        .exists()
        .isInt()
        .withMessage('int tipida kiriting'),
    body('name')
        .exists()
        .isString()
        .withMessage('string is required')
        .notEmpty()
        .withMessage('Password must be filled')
];