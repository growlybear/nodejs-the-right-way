const fs = require('fs');
const filename = process.argv[2];

if (!filename) {
	console.err('Usage: node read-simple <filename>');
	process.exit(1);
}

fs.readFile(filename, function (err, data) {
	if (err) throw err;

	console.log(data.toString());
});
