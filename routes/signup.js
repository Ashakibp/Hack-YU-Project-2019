var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('signup', { title: 'Sign Up' });
});

router.post('/', function(req, res, next) {
    let fname = req.body.firstname;
    let lname = req.body.lastname;
    let uname = req.body.username;
    let pass = req.body.password;
});

module.exports = router;
