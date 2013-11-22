const fs = require('fs');
const filename = 'target.txt';

var contents = 'a witty message';

fs.writeFile(filename, contents, function (err) {
    if (err) throw err;

    console.log('Contents written to ' + filename);
});
