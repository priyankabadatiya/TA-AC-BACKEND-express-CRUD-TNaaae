
let express = require('express');
let router = express.Router();
let User = require('../models/users');

router.get('/new', (req, res) => {
    res.render('addUsers');
});

router.get('/', (req, res, next) => {
    User.find({}, (err, users) => {
        if(err) return next(err);
        res.render('users', {users: users});
    });
    
});


router.post('/' , (req, res, next) => {
    User.create(req.body, (err, newUser) => {
        if(err) return res.redirect('/users/new');
        res.redirect('/');
    });
});

router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('singleUser', {user: user});
    });
});


module.exports = router;