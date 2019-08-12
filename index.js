const express = require('express');
var app = express();
var http = require('http').Server(app);
var api_medic = require('./api/api_medic');

process.on('uncaughtException', function (err) {
  console.log(err);
})

// to render static html files
app.use(express.static(__dirname + '/views'));

// routes for the app
app.get('/bodyparts', api_medic.getBodyParts);
app.get('/detailedBodypart/:id', api_medic.getDetailedBodyParts);
app.get('/symptoms/:bodyPart/:gender', api_medic.getSymptomsForBodyPart);
app.get('/diagnosis', api_medic.getDiagnosis);
app.get('/specialization', api_medic.getSpecialization);

var server = http.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
