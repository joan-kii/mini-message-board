var express = require('express');
var router = express.Router();

const title = 'Mini Messages Board';

const messages = [
  {
    text: 'Welcome to Mini Message Bord!',
    user: 'Joankii',
    added: new Date().toLocaleString() 
  },
  {
    text: 'Hello World!',
    user: 'Joankuu',
    added: new Date().toLocaleString() 
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title, messages: messages });
});

// GET new message page
router.get('/new', function(req, res, next) {
  res.render('form', {title: title})
});

//POST new message
router.post('/new', function(req, res, next) {
  messages.push(
    {
      text: req.body.message, 
      user: req.body.user, 
      added: new Date().toLocaleString()
    }
  )
  res.redirect('/');
})

module.exports = router;
