var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 8080);
console.log("Server up and running on port " + (process.env.PORT || 8080));
