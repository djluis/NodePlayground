'use strict';
var http = require('http');
var bl = require('bl');

module.exports = function(endpoint,returnCallback) {

	http.get(endpoint, function(response) {
        response.pipe(bl(function(error,data) {
                var dataString = data.toString();
                console.log(dataString.length);
                console.log(dataString);
            })
        );
	}).on('error', function(e) {
	  returnCallback(e);
	});

};