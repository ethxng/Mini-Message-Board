var express = require('express');
var router = express.Router();
const { DateTime } = require('luxon');

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

function convertDate(date){
  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
}

router.get('/', function(req, res, next) {
  let formattedDate = [];
  // convert the date to make it look good first before passing them in pug template
  for (let i = 0; i < messages.length; i++){
    formattedDate.push(convertDate(messages[i].added));
  }
  res.render('index', { title: "Mini Messageboard", messages: messages, date: formattedDate });
});


router.post('/new', function(req, res) {
  let name = req.body.yourName;
  let message = req.body.yourInput;
  console.log(name + ' ' + message);
  messages.push({text: message, user: name, added: new Date()});
  res.redirect('/');
});
module.exports = router;