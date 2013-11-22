const fs = require('fs');
const filename = process.argv[2];

if (!filename) {
	console.error('Usage: node watcher <filename> ');
	process.exit(1);
}

fs.watch(filename, function () {
    console.log("File " + filename + " just changed!")
});
console.log("Watching for changes to " + filename + " ...");
