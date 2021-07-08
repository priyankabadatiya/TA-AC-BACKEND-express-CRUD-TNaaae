let express = require('express');
let usersRouter = require('./routes/users');

let app = express();


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({extended: false}));
app.use('/users', usersRouter);

//error handler

app.use((req, res, next) => {
    res.send('Page not found');
});

app.listen(4000, () => {
    console.log("Server is listening on port 4k");
});