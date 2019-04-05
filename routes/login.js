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


function checkDatabase(uname, pass){
    var ref = db.ref("/users");

    ref.on("value", function (snapshot) {
        for (let i = 0; i < snapshot.val().length(); i++) {
            console.log(snapshot.val()[i]);
            console.log("---------")
        }
    });
}
module.exports = router;
