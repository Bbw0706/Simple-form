const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://bee:silvia16@ds155651.mlab.com:55651/myuserform");
mongoose.Promise = global.Promise;

const app = express();

//body parser
app.use(bodyParser.json());

//routes
app.use("/api", routes)

const port = 5000;

app.listen(process.env.PORT || port, () => console.log(`Listen to the port of, ${port}`))