var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

router.get('/', function(req, res, next) {
     res.send('form...')
});
router.post('/', function(req, res, next) {
  return knex('items').insert({
    link: req.body.link,
    title : req.body.title,
    description : req.body.description,
    category_id : req.body.category,
    difficulty_id :  req.body.difficulty,
    type_id:req.body.type
      })
        .then( function (result) {
         res.json({ success: true, message: 'ok' });
   })
});
module.exports = router;
