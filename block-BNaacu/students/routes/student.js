let express = require('express');
let router = express.Router();

router.get('/new', (req, res) => {
    res.render('studentForm');
});

router.post('/', (req, res) => {
    res.send('Stdent data saved');
});

router.get('/', (req, res) => {
    let students = ["prashant", "ankit", "suraj", , "ravi"];
    res.render("student", { list: students });
});

router.get('/:id', (req, res) => {
    let students = { name: "ankit", email: "ankit@gmail.com" };
    res.render("studentDetail", { students: students });

})
module.exports = router;