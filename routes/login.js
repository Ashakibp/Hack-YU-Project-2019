var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login', { title: 'Log In' });
});

router.post('/', function (req, res, next) {
    let uname = req.body.username;
    let pass = req.body.password;

    checkDatabase(uname, pass);
});

module.exports = router;
