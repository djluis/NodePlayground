'use strict';
var HttpOperations = require('./BlHttpOperations');

HttpOperations(
		process.argv[2],
		function(err,data){
		if(err){
			console.log(err);
		}
		else{

		}
});
