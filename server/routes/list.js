var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

// knex middleware for logging
knex.on( 'query', function( queryData ) {
    console.log(`KNEX Operation: ${ queryData.sql }`);
});

router.get("/:id", (req, res) => {
  return knex().from('items').select()
    .where({'items.id': req.params.id})
    .then( function(data) {
      const [newData]= data
      res.send(newData);
    });
});

router.get('/', function(req, res, next) {
  const query = req.query

  let sqlQuery = knex.select('items.id', 'items.title','items.description', 'items.link','items.category_id', 'items.type_id', 'items.difficulty_id', 'items.rate_down', 'items.rate_up')
  .from('items');

  if (query.category_id){
    sqlQuery = sqlQuery
    .where({'items.category_id' :query.category_id});
  }

  if (query.type_id){
    sqlQuery = sqlQuery
    .where({'items.type_id' :query.type_id})
  }
  if (query.difficulty_id){
    sqlQuery = sqlQuery
    .where({'items.difficulty_id' :query.difficulty_id})
  }

  sqlQuery
  .then( function(data) {
    console.log(data)
    res.send(data);
  });
});

module.exports = router;
