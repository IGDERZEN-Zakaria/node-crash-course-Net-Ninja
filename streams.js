const fs = require('fs');


// opération asynchrone qui va prendre du temps à s'exécuter 
const readStream = fs.createReadStream('./docs/blog3.txt',{encoding : "utf-8"});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// chunk => buffer of data 
// An event listner for a 'data' event 
readStream.on('data', chunk => {
   //console.log('---- NEW CHUNK ----');
   //console.log(chunk.toString());
   //console.log(chunk);
   

  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk);
});

// piping
// une façon plus simple d'écrire le code en haut à condition que ça soit ( readStream => writeStream )

// readStream.pipe(writeStream);