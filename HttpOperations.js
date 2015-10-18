'use strict';
var http = require('http');

module.exports = function(endpoint,returnCallback) {

	http.get(endpoint, function(res) {
        // Continuously update stream with data
        var body = '';
        res.setEncoding('utf8');
        res.on('data', function(d) {
            body += d;
            console.log(d);
        });
        res.on('end', function() {
            returnCallback(null,body);
        });

	}).on('error', function(e) {
	  returnCallback(e);
	});

};