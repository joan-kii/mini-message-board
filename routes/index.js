var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleString() 
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleString() 
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messages Board', messages: messages });
});

// GET new message page
router.get('/new', function(req, res, next) {
  res.render('form', {title: 'Say Something'})
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
