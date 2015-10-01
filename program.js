var fs = require('fs');

var fileBuffer = fs.readFile(
	process.argv[2],
	'utf8', 
	function readAsyncOp(err,data){
		console.log(data.split('\n').length -1);
	}
);



