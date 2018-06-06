var express = require('express');
var router = express.Router();
var knex  = require('../helpers/knex');


router.get('/', function(req, res, next) {
  const query = req.query
  if (query.id){
    console.log(req.query + '' + req.query.item)
    return knex().from('items').select()
    .where({'items.id': query.id})
    .then( function(data) {
      res.send(data);
    });
  }
  console.log('req.query: '+req.query + ' req.query.item: ' + req.query.item)

  res.send(query);
});

module.exports = router;
