# How to run the backend:
* Modify the `config/token.js` and add your apimedic token here like so:
`var token = $YOUR_TOKEN_HERE;`

* In the project root directory run:
`npm install; node index.js;`

# API documentation
## getBodyParts API
description:

GET http://localhost:3000/bodyparts

#### example:
* request:
GET http://localhost:3000/bodyparts
* response:
`[{"ID":16,"Name":"Abdomen, pelvis & buttocks"},{"ID":7,"Name":"Arms & shoulder"},{"ID":15,"Name":"Chest & back"},{"ID":6,"Name":"Head, throat & neck"},{"ID":10,"Name":"Legs"},{"ID":17,"Name":"Skin, joints & general"}]`

## getSymptoms API
description:
GET http://localhost:3000/symptoms/:bodyPart/:genderEnum
* :bodyPart is a corresponding ID of the bodyPart returned fromt he getBodyParts API.
* :genderEnum is a number between 0-3 where 0=male, 1=female, 2=body, 3=girl

example:
* request:
http://localhost:3000/symptoms/16/3
* response:
`[{"ID":10,"Name":"Abdominal pain","HasRedFlag":false,"HealthSymptomLocationIDs":[16,36],"ProfName":"","Synonyms":[" Stomach ache"]},{"ID":44,"Name":"Nausea","HasRedFlag":false,"HealthSymptomLocationIDs":[6,22,15,31,16,36,17,47],"ProfName":"","Synonyms":[]},{"ID":45,"Name":"Heartburn","HasRedFlag":false,"HealthSymptomLocationIDs":[6,24,15,31,16,36],"ProfName":"","Synonyms":["Pyrosis"]},{"ID":92,"Name":"Early satiety","HasRedFlag":false,"HealthSymptomLocationIDs":[16,36],"ProfName":"","Synonyms":[]},{"ID":101,"Name":"Vomiting","HasRedFlag":false,"HealthSymptomLocationIDs":[6,25,16,36],"ProfName":"","Synonyms":[]},{"ID":153,"Name":"Fast, deepened breathing","HasRedFlag":false,"HealthSymptomLocationIDs":[6,24,25,15,31,16,36],"ProfName":"","Synonyms":["Fast breathing","Hyperventilation"]},{"ID":179,"Name":"Stomach burning","HasRedFlag":false,"HealthSymptomLocationIDs":[16,36],"ProfName":"","Synonyms":["Burning abdominal pain","Burning stomach ache"]},{"ID":181,"Name":"Vomiting blood","HasRedFlag":true,"HealthSymptomLocationIDs":[6,25,16,36],"ProfName":"","Synonyms":[]}]`

## getDiagnosis API
description:
GET http://localhost:3000/diagnosis?symptoms=:symptoms&gender=:gender&yob=:yob
:symptoms is an array of symptom IDs that map to the ones from getSymptoms API.
:gender is a string that can either be 'male' or 'female'
:yob is a year of birth that is a number.

example:
* request:
GET http://localhost:3000/diagnosis?symptoms=[10,44,45]&gender=male&yob=1993
* response:
`[{"Issue":{"ID":281,"Name":"Food poisoning","Accuracy":90,"Icd":"A05;A02;A03;A04","IcdName":"Other bacterial foodborne intoxications, not elsewhere classified;Other salmonella infections;Shigellosis;Other bacterial intestinal infections","ProfName":"Foodborne illness","Ranking":1},"Specialisation":[{"ID":15,"Name":"General practice","SpecialistID":0},{"ID":19,"Name":"Internal medicine","SpecialistID":0}]},{"Issue":{"ID":18,"Name":"Reflux disease","Accuracy":30,"Icd":"K21","IcdName":"Gastro-oesophageal reflux disease","ProfName":"Gastroesophageal reflux disease","Ranking":2},"Specialisation":[{"ID":14,"Name":"Gastroenterology","SpecialistID":0},{"ID":15,"Name":"General practice","SpecialistID":0}]},{"Issue":{"ID":431,"Name":"Drug side effect","Accuracy":21,"Icd":"T88.7","IcdName":"Unspecified adverse effect of drug or medicament","ProfName":"Adverse drug reaction","Ranking":3},"Specialisation":[{"ID":15,"Name":"General practice","SpecialistID":0},{"ID":19,"Name":"Internal medicine","SpecialistID":0}]}]`

## getSpecialization API
description:
GET http://localhost:3000/specialization?symptoms=:symptoms&gender=:gender&yob=:yob
* :symptoms is an array of symptom IDs that map to the ones from getSymptoms API.
* :gender is a string that can either be 'male' or 'female'
* :yob is a year of birth that is a number.

example:
* request:
GET http://localhost:3000/specialization?symptoms=[10,44,45]&gender=male&yob=1993
* response:
`[{"ID":15,"Name":"General practice","Accuracy":90,"Ranking":0},{"ID":19,"Name":"Internal medicine","Accuracy":70.85107,"Ranking":0},{"ID":14,"Name":"Gastroenterology","Accuracy":19.1489353,"Ranking":0}]`

