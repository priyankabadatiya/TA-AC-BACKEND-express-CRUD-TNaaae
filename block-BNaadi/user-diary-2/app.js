let express = require('express');
let mongoose = require('mongoose');
let userRouter = require('./routes/users');
let logger = require('morgan');

mongoose.connect(" mongodb://localhost/userDiary", { useNewUrlParser: true,  useUnifiedTopology: true}, (err) => {
    console.log(err ? err : "connected to db");
});
let app = express();

//template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// middleware
app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));

app.use(express.static(__dirname + '/public'));

//router middleware
app.use('/users', userRouter);

//404
app.use((req, res, next) => {
    res.status(404).send("Page not found");
});
// custom
app.use((err, req, res, next) => {
    res.send(err);
});


app.listen(4000, () => {
    console.log("Server is listening on port 4k");
});