const express = require("express");
const app = express();
var port = 3000;

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
var User = mongoose.model("User", nameSchema);

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log('Server listening on port ' +port);
});

app.post("/addname", (req, res) => {

});