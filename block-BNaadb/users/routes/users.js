let express = require('express');
let router = express.Router();
let User = require('../models/users');

router.get('/new', (req, res) => {
    res.render('userForm');
});

router.get('/', (req, res, next) => {
    User.find({}, (err, users) => {
        if(err) return next(err);
        res.render('users', {users: users});
    });
    
});


router.post('/' , (req, res, next) => {
    User.create(req.body, (err, newUser) => {
        if(err) return next(err);
        res.redirect('/');
    });
});

router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('singleuser', {user: user});
    });
});

router.get('/:id/edit', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('updateuser', {user: user});
    })
});

router.post('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err, user) => {
        console.log(req.body);
        if(err) return next(err);
        res.redirect('/users');
    })
});

router.get('/:id/delete', (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, book) => {
        if(err) return next(err);
        res.redirect('/users');
    })
});

module.exports = router;