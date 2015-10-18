'use strict';
var fs = require('fs');
var path = require('path');

module.exports = function(dir, extension, returnCallback) {
	try {
		fs.readdir(
			dir,
			function readAsyncOp(err, list) {
				if (err)
					return returnCallback(err, null);

				var totalFiles = [];

				for (i = 0; i < list.length; i++) {
					if (path.extname(list[i]) == ('.' + extension))
						totalFiles.push(list[i]);
				}

				return returnCallback(null, totalFiles);
			}
		);
	} catch (error) {
		return returnCallback(error, null);
	}
}