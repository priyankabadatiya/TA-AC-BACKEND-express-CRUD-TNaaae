let express = require('express');
let router = express.Router();

router.get('/new', (req, res) => {
    res.render("userForm");
});

router.get('/', (req, res) => {
    let students = ["john", "james", "cathy", "pater", "jennifer"];
    res.render("students", {AltCampus: students});
});

router.get('/:id', (req, res) => {
    res.render("singleUser", {name: "Suraj", email: "suraj@gmail.com"});
});

router.post('/', (req, res) => {
    res.send(req.body);
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    res.send(`${id} is deleted`);
});

module.exports = router;