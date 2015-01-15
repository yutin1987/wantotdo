var express = require('express');
var fs = require('fs');
var app = express();

var page = fs.readFileSync('public/index.html');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.post('/', function(req, res) {
  res.send(page);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
