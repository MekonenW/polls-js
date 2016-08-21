var mongoose= require('mongoose'); 
//create schema
var SurveySchema= new mongoose.Schema({
	question:String,
	//foreign key to associate user with survey questions
	_user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
	options:[{value:String, upvote:{type:Number, default:0}}]

})
//create User model based on this schema
mongoose.model('Survey', SurveySchema);
