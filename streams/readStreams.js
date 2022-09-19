const fs = require('fs');

let stream = fs.createReadStream('./logs.log', 'utf-8');

let data = '';

stream.once('data', () => {
    console.log('Iniciando stream... \n');
    data += chunk;
});

stream.on('data', (chunk) => {
    console.log(`${chunk.leng} |`);
});

stream.on('end', () => {
    console.log('Fin del stream... \n');
    console.log(data.length);
});