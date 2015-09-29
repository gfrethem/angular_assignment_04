/**
 * Created by gfrethem on 9/29/15.
 */
var express = require('express');
var app = express();
var nouns = require('./public/assets/data/nouns');
var adjs = require('./public/assets/data/adjectives');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/public/assets/views/index.html");
});

app.get('/getNouns', function(request, response) {
    response.send(nouns);
    console.log("Sent nouns.json");
});

app.get('/getAdjs', function(request, response) {
    response.send(adjs);
    console.log("Sent adjectives.json");
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;