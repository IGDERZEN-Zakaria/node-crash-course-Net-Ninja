const http = require("http");
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
  
  // lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log('hellow');
  });

  greet();
  greet();

  //set header content type
  res.setHeader("Content-Type", "text/html");

  let path = './views/';

  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-blah':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  // Status Code => 
  // 200  ==> OK
  // 301  ==> Resorce moved 
  // 404  ==> Not found
  // 500  ==> Internal server error 




  // send an html file 
  //fs.readFile('./views/index.html', (err, data) => {
    fs.readFile(path, (err, data) => {

    if (err) {
      console.log(err);
      res.end();
    }
    else {
      
      //res.write(data);
      //res.end();

      // si on envoie un seul object dans le res.write  on peut faire ça 
      res.end(data);
    }
  });

  
});

server.listen(3000, "localhost", () => { 
  console.log("Listning for requests on port 3000");
});
