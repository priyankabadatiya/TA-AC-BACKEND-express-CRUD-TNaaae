let express = require('express')
let router = express.router();
let User = require('../models/users');

router.get('/', (req,res, next)=>{
User.find({}, (err, users)=>{
if(err) return next(err)
res.render('listUsers', {users:users})
})
})
//Create
router.post('/', (req, res, next) => {
    User.create(req.body, (err, user) => {
        if(err) return next(err);
        res.redirect('/users');
    })
});

//Display Single user
router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('singleUser', {user: user});
    })
});

//Update user
router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body,(err, user) => {
        console.log(user);
        if(err) return next(err);
        res.redirect(303, '/users');
    })
});

//Delete user
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, user) => {
        if(err) return next(err);
        res.redirect(303, '/users');
    })
});

module.exports = router;