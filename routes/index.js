var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'DEMO MERN' });
});

router.get('/testsendjson', (req, res) => {
  res.json(testJSON);
  console.log("testsendjson");
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
