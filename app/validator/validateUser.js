const { check, validationResult }  = require('express-validator');

module.exports = () => {
    return [
        check('email').isEmail().withMessage("Invalid email"),
        check('name').isLength({min:5}).withMessage('Password is least 5 character.'),
        check('password').isLength({min:5}).withMessage('Password is least 5 character.'),
        check('confirmPassword').custom( (val, {req}) => {
            if(val != req.body.password)
                throw new Error("confirm password is not match password");
            return true;
        })
    ]
}
