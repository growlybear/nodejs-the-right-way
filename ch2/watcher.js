'use strict';

const fs = require('fs');
const filename = process.argv[2];
const spawn = require('child_process').spawn;

if (!filename) {
    console.error('Usage: node watcher <filename> ');
    process.exit(1);
}

fs.watch(filename, function () {
    let ls = spawn('ls', ['-lh', filename])
    ls.stdout.pipe(process.stdout);
});

console.log("Watching for changes to " + filename + " ...");
