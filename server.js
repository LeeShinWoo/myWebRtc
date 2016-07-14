var fs = require('fs');

var options = {
    key: fs.readFileSync('fake-keys/privatekey.pem'),
    cert: fs.readFileSync('fake-keys/certificate.pem')
};

var express = require("express"),
    http = require("https"), // Use HTTPs here -------------
    app = express();


app.use(express.static(__dirname + '/public'));

var httpServer =http.createServer(options, app);

var io = require('socket.io').listen(httpServer);

httpServer.listen(3000, function(req,res){
// var httpServer =http.createServer(app).listen(3000, function(req,res){
  console.log('Socket IO server has been started');
});
