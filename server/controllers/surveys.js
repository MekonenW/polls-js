var mongoose= require('mongoose'); 
var User= mongoose.model('User'); 
var Survey= mongoose.model('Survey'); 
//user controller will export object with methods
module.exports= {
	//return all the data in the db
	index:function(req, res){
		Survey.find({}).populate('_user').exec(function(err, surveys){
			res.json(surveys);
		})
	},
	create:function(req, res){
		//find user first by id to associate user with survey
		User.findOne({_id:req.body.userID}, function(err, user){
			var surveyTBS= new Survey({
				question:req.body.question, 
				_user:user._id, 
				options:[req.body.option1, req.body.option2, req.body.option3, req.body.option4]
			})
			surveyTBS.save(function(err, survey){
				res.json(survey);
			})
		})
	},
	upvote: function(req, res){
		//user req.params instead of req.body b/c we are reading from request parameter
		Survey.findOne({_id:req.params.id}, function(err, surveyBU){
			surveyBU.options[req.body.optionIndex].upvote++; 
			surveyBU.save(function(err, surveyAU){
				res.json(surveyAU);
			})
		})
	},
	destroy: function(req, res){
		Survey.remove({_id: req.params.id}, function(err, survey){
			res.json(true); 
		})
	}, 
	show:function(req, res){
		Survey.findOne({_id: req.params.id}).populate('_user').exec(function(err, survey){
			res.json(survey);
		})
	}
	
}