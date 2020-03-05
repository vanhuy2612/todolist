// Post Store User : 
const UserCtrl = require('../app/controller/UserController');
const validateUser = require('../app/validator/validateUser');

module.exports = (Router) => {
    Router.get('/api/user/login', (req, res, next) => {
        res.render('login',{
            title : 'Login',
            errors : req.session.errors || []
        })
    })
    Router.get('/api/user',UserCtrl.index);
    Router.get('/api/user/register',(req, res, next) => {
        res.render('register',{
            title : 'Register',
            errors : req.session.errors || []
        });
    });

    Router.post('/api/user/login',UserCtrl.check);
    Router.post('/api/user',validateUser(),UserCtrl.store);

    Router.put('/api/user',validateUser(),UserCtrl.update);
}
