var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var mySchema = mongoose.Schema({
  icecreamname: String,
  name: String
});

var ChoiceModel = mongoose.model('choices', mySchema);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Mainframe Self Service' });
});

router.get('/healthcheck', function(req, res) {
  var responseObject = { message: 'OK' };
  res.send(responseObject);
});

var database = [];

router.post('/ilike/:icecreamchoice/:name', function(req, res) {
  if(req.body.formfactor) {
    console.log(req.body.formfactor);
  } else {
    console.log('No formfactor!');
  }

  if(name == 'manthan') {
    console.log('Name is ' + name);
  }

    var choice = req.params.icecreamchoice;
    var name = req.params.name;
    var newChoice = new ChoiceModel();
    newChoice.icecreamname = choice;
    newChoice.name = name;
    newChoice.save(function(err, savedObject) {
      if(err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.send(savedObject);
      }
    });


});

router.get('/likes', function(req, res) {
  res.send(database);
});

module.exports = router;
