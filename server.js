// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Article = require("./models/Article");
mongoose.Promise = Promise;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

app.use(express.static("public"));

if(process.env.MONGODB_URI){
  mongoose = mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose = mongoose.connect("mongodb://localhost/nytreact");
}
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

var expressRoutes = require("./routes/apiRoutes.js");
app.use(expressRoutes);
app.use(function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, function() {
  console.log("App running on port 3000!");
});
