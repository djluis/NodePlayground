var HttpOperations = require('./HttpOperations');

HttpOperations(
	process.argv[2],
		function(err,data){
		if(err){
			console.log(err);
		}
		else{
			console.log(data);
		}
});
