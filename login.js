var passport = require('passport');
var LocalStrategy = require('passport-local');

var LocallyDB = require('locallydb');
var db = new LocallyDB('./.data');
var users = db.collection('users');

var crypto = require('crypto');

function hash (password) {
    return crypto.creathash('sha512').update(password).digest('hex');
}

// name, passport, function
passport.use(new LocalStrategy(function (username, password, done) {

    var user = users.where({ username: username, passwordHash: hash(password) }).items[0];

    if (user) {
        done(null, user);
    } else {
        done(null, false);
    }
}));

// cid is unic id of user
passport.serializeUser(function (user, done){
    done(null, user.cid);
});

passport.deserializerUser(function (cid, done){
    done(null, users.get(cid));
});

var router = require('express').Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlecoded({ extend: true})); // login page
router.use(bodyParser.json()); // API
router.use(require('cookie-parser')());
router.use(require('express-session')({
    secret: 'idjiowjdiojd0290id90iwdoqwpodw',
    resave: false,
    saveUninitialized: true
}));
router.use(passport.initialize());
router.use(passport.session());
