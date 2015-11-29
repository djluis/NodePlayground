'use strict';
var JugglingAsync = require('./JugglingAsync');

JugglingAsync(
		process.argv[2],
		process.argv[3],
		process.argv[4],
		function(err,data){
		if(err){
			console.log(err);
		}
		else{

		}
});
