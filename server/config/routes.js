//define app by passing the app variable in server.js by wrapping everything in routes.js by function
//the function will take app var as parameter and export the function to 
//we need to invoke controllers
var Users= require(__dirname + '/../controllers/Users'); 
var Surveys= require(__dirname + '/../controllers/Surveys'); 


module.exports= function(app){
	//Users.create is a callback 
	//create user
	app.post('/users', Users.create); 
	app.get('/surveys', Surveys.index);
	//create survey questions
	app.post('/surveys', Surveys.create);
	//updating so we can use put method
	app.put('/surveys/:id', Surveys.upvote);
	//delete
	app.delete('/surveys/:id', Surveys.destroy);
	//poll
	app.get('/surveys/:id', Surveys.show);


}