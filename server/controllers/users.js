var mongoose= require('mongoose'); 
var User= mongoose.model('User'); 
//user controller will export object with methods
module.exports= {
	create:function(req, res){
		console.log(req.body);
		User.findOne({username: req.body.username}, function(err, user){
			if (user){
				res.json(user);
			}else{
				var user= new User(req.body);
				user.save(function(err, user){
					res.json(user); 
				})
			}
		})
	}
}