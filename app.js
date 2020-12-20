const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();


// connect to mongodb & listen for requests
const dbURL = 'mongodb+srv://Zack:Ken28@nodeTuts.cj7wp.mongodb.net/node-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('Connected to the DB'))
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
//app.set('views', 'myviews');
app.set('view engine', 'ejs');

// listen for requests



// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

//mongoose & mango sandbox routes 
app.get('/add-blog', (req, res) => {

  const blog = new Blog({
    title: 'new blog 3',
    snippet: 'About my new blog 3',
    body: 'More about my new blog 3'
  });


  blog.save()
    .then((result) => res.send(result))
    .catch(err => (console.log(err)));

});


app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});


app.get('/single-blog', (req, res) => {

  Blog.findById('5fdf4dfd2f320e1dfcc56331')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});


app.use((req, res, next) => {
  console.log('\nnew request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

app.use((req, res, next) => {
  console.log('\nIn the next middlewarec');
  next();
});


// console.log('dev : ');
// app.use(morgan('tiny'));
// console.log('tiny : ');
// app.use(morgan('combined'));
// console.log('combined : ');



app.get('/', (req, res) => {
  // const blogs = [
  //   { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  //   { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  //   { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  // ];
  // res.render('index', { title: 'Home', blogs });

  app.redirect('/blogs');

});

app.get('/blogs', (req, res) => {

  Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All Blogs', blogs: result });
    })
    .catch(err => {
      console.log(err);
    });
});



app.get('/about', (req, res) => {

  res.render('about', { title: 'About' });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

