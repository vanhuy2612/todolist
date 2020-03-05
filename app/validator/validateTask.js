const { check, validationResult } = require('express-validator');

module.exports = () => {
    return [
        check('name').isLength({min:3}).withMessage('Name is min 3 character'),
        check('status').isNumeric().withMessage('Status is a numeric').isIn([1,2,3]).withMessage("Status is between 1-3"),
        check('timestart').isISO8601().withMessage('time start is a date.'),
        check('timeend').isISO8601().withMessage('time end is a date.').custom( (value,{ req }) => {
            let end = new Date(value);
            let start = new Date(req.body.timestart);
            console.log(start + " " + end);
            if( start.getTime() > end.getTime() ) {
                console.log('start > date');
                throw new Error('start date < end date');
            }
            return true;
        }),
        check('des').isLength({min:1}).withMessage('Des is empty, press any key')
    ];
}
