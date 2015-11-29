'use strict';
var http = require('http');
var bl = require('bl');

var results =[];
var total = 3;

//Return the response from http get operation to the given endpoint
var getEndpoint = function(endpoint,returnData){
    http.get(endpoint, function(response) {
        response.pipe(bl(function(error,data) {
                var dataString = data.toString();
                //console.log(dataString);
                returnData(dataString);
            })
        );
    }).on('error', function(e) {
      returnCallback(e);
    });
}

module.exports = function() {
        //Retrieve the complete list of arguments (endpoints)
        var args = Array.prototype.slice.call(arguments);
        var results = [];
        var total = arguments.length;
        var resultsCount = 0;

        args.forEach(function(endpoint,i){
            getEndpoint(endpoint, function(data){
                results[i] = data;
                resultsCount++;

                if(resultsCount==total)
                {
                    results.forEach(function(r){
                        console.log(r);
                    });
                }

            });
        });
	    

};