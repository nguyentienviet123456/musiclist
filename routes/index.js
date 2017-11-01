const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

const testJSON = [
  {
    name: "viet",
    username: "captain"
  }, {
    name: "viet",
    username: "captain"
  }
];

router.get('/sendjson', (req, res, next) => {
  res.json(testJSON);
});

module.exports = router;
