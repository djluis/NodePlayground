var http = require("http");

module.exports = function(endpoint,returnCallback) {

	http.get(endpoint, function(res) {
	  console.log(res.data);
	}).on('error', function(e) {
	  console.log(e.message);
	})

};