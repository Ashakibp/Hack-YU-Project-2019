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

    addToDatabase(fname, lname, uname, pass, res);
});

function addToDatabase(fname, lname, uname, pass, res) {
    return db.ref('users/').child("users").push().set({
        firstname: fname,
        lastname: lname,
        password: pass,
        username: uname
    }).then(res.redirect("/"));
}

module.exports = router;
