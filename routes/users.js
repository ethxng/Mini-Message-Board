var express = require('express');
const { redirect } = require('express/lib/response');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('form');
});


module.exports = router;
