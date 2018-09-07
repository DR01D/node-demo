const express = require("express");
const mongoose = require("mongoose");
const app = express();
var port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log('Server listening on port ' +port);
});