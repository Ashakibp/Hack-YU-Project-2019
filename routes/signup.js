var express = require('express');
var router = express.Router();

router.get('/signup', function (req, res, next) {
    res.render('signup', { title: 'Sign Up' });
});

module.exports = router;
