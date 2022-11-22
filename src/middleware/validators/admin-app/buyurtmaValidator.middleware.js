const { body } = require('express-validator');

exports.buyurtmaValidation = [
    body('phone_number')
        .exists()
        .isMobilePhone()
        .isLength({ min: 7, max: 30})
        .withMessage('Must be [3: 30] chars long'),
    body('product_id')
        .exists()
        .isInt()
        .withMessage('product_id is required')
        .notEmpty()
        .withMessage('product_id must be filled'),
    body('full_name')
        .exists()
        .isString()
        .withMessage('full_name is required')
        .notEmpty()
        .withMessage('full_name must be filled'),
    body('region_id')
        .exists()
        .isInt()
        .withMessage('region_id is required')
        .notEmpty()
        .withMessage('region_id must be filled'),
    body('district_id')
        .exists()
        .isInt()
        .withMessage('district_id is required')
        .notEmpty()
        .withMessage('district_id must be filled'),
    body('adress')
        .exists()
        .isString()
        .withMessage('adress is required')
        .notEmpty()
        .withMessage('adress must be filled'),
    body('date_time')
        .exists()
        .isInt()
        .withMessage('date_time is required')
        .notEmpty()
        .withMessage('date_time must be filled')
];