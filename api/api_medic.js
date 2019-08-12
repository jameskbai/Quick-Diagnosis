var token = require('../config/token').token;
var body_location_url = "https://sandbox-healthservice.priaid.ch/body/locations?token=" + token + "&format=json&language=en-gb";
var detailed_body_url = "https://sandbox-healthservice.priaid.ch/body/locations/%s?token=" + token + "&format=json&language=en-gb"
var body_symptom_url = "https://sandbox-healthservice.priaid.ch/symptoms/%s/%s?token=" + token + "&format=json&language=en-gb";
var diagnosis_url = "https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=%s&gender=%s&year_of_birth=%s&token=" + token + "&format=json&language=en-gb";
var specialization_url = "https://sandbox-healthservice.priaid.ch/diagnosis/specialisations?symptoms=%s&gender=%s&year_of_birth=%s&token=" + token + "&format=json&language=en-gb";
var request = require('request');
var util = require('util');

module.exports = {
  getBodyParts: function(req, res) {
      request(body_location_url, function (err, apiResp) {
          res.json(JSON.parse(apiResp.body));
      });
  },

  getDetailedBodyParts: function(req, res) {
    var id = req.params.id;
    request(util.format(detailed_body_url, id), function(err, apiResp) {
      res.json(JSON.parse(apiResp.body));
    })
  },
  getSymptomsForBodyPart: function (req, res) {
      var gender = req.params.gender || 0;
      var bodyPart = req.params.bodyPart;
      if (!bodyPart) {
        res.send("No body part given");
      } else {
        request(util.format(body_symptom_url, bodyPart, gender), function (err, apiResp) {
          res.json(JSON.parse(apiResp.body));
        });
      }
  },
  getDiagnosis: function (req, res) {
    var symptoms = req.query.symptoms;
    var gender = req.query.gender;
    var yob = req.query.yob;
    request(util.format(diagnosis_url, symptoms, gender, yob), function (err, apiResp) {
        res.json(JSON.parse(apiResp.body));
    });
  },
  getSpecialization: function(req, res) {
    var symptoms = req.query.symptoms;
    var gender = req.query.gender;
    var yob = req.query.yob;

    request(util.format(specialization_url, symptoms, gender, yob), function (err, apiResp) {
      res.json(JSON.parse(apiResp.body));
    });
  }
};
