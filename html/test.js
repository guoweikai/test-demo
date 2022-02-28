const fs = require('fs');
const { Decoder } = require('./ebml.js');

const decoder = new Decoder();

decoder.on('data', chunk => console.log(chunk));

fs.readFile('./test.webm', (err, data) => {
    if (err) {
        throw err;
    }
    decoder.write(data);
});
