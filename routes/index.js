var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express Server' });
});

router.get('/sendjson', (req,res,next) => {
  res.json(testJSON);
});

const testJSON = [
  {
    name: "John Smith",
    username: "CaptainCode"
  },
  {
    name: "Jane Doe",
    username: "JaneyCakes"
  }
];
module.exports = router;
