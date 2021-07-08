let express = require('express');
let router = require('./routes/students');
let app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use('/students', router)

//error handler

app.use((req, res, next) => {
    res.status(404).send("Page not found");
});

app.listen(4000, () => {
    console.log("Server islistening on port 4k");
});