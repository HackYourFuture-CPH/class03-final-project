var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

/* GET contents listing. */
router.get('/contents', function(req, res, next) {
  knex('contents').select().then( function(data) {
    res.send(data);
  });
});

module.exports = router;
