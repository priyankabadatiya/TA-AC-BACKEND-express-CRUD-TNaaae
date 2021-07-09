let express = require('express');
let mongoose = require('mongoose');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

mongoose.connect("mongodb://localhost/users", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log(err ? err : "connected to db");
});

let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//capture form data
app.use(express.urlencoded({extended: false}));

//routing middleware
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

app.use((err, req, res) => {
    res.send(err);
});

app.listen(5000, () => {
    console.log("Server is listening on port 5k");
});
