'use strict';
var net = require('net');
var strftime = require('strftime');

module.exports = function(port) {
    var server = net.createServer(function(socket){
        socket.end(strftime('%Y-%m-%d %H:%M'));
    });

    server.listen(port);      
};