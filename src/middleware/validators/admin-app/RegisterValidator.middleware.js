const { body } = require('express-validator');

exports.Registratsiya = [
    body('phone_number')
        .exists()
        .isLength({ min: 10, max: 30})
        .withMessage('Must be [3: 30] chars long')
        .isNumeric()
        .withMessage('son korinishida kiriting'),
        body('full_name')
        .exists()
        .isLength({ min: 6, max: 30})
        .withMessage('Must be [3: 30] chars long'),
    body('password')
        .exists()
        .withMessage('Password is required')
        .notEmpty()
        .withMessage('Password must be filled')
];