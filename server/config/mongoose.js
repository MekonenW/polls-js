//responsible for connecting to the database and loading up the files in models
var mongoose= require('mongoose'); 
mongoose.connect('mongodb://localhost/surveys'); 
//after connecting to database require the files in models

require(__dirname + '/../models/User');

require(__dirname + '/../models/Survey');



