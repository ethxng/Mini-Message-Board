var express = require('express');
var router = express.Router();

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/


router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});


router.post('/new', function(req, res) {
  let name = req.body.yourName;
  let message = req.body.yourInput;
  console.log(name + ' ' + message);
  messages.push({text: message, user: name, added: new Date()});
  res.redirect('/');
});
module.exports = router;