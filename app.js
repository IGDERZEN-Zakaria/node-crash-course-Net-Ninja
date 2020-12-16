const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {

  // dans cette méthode on a pas besoin de set le type du contenu ( pris en charge automatiquement)
   //res.send('<p>home page</p>');
  
  //on a besoin de préciser le rootpath pour que node prenne en charge ce chemin
  console.log('dirname : ' + __dirname);
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {

 //res.send('<p>about page</p>');
   res.sendFile('./views/about.html', { root: __dirname });
});


// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});



// création d'un middleware
// 404 page
// declaration en dernier pour prencdre en charge tous le reste des URLs ( default mecanisme ) (Catch ALL)
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});







