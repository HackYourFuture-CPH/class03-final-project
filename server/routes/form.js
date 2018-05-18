var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

router.get('/', function(req, res, next) {
     res.send('form...')
});
router.post('/', function(req, res, next) {
  return knex('items').insert({
    link: req.body.linkValue,
    title : req.body.titleValue,
    description : req.body.descriptionValue,
    category : req.body.categoryValue,
    difficulty :  req.body.difficultyValue,
    type:req.body.typeValue
      })
        .then( function (result) {
         res.json({ success: true, message: 'ok' });
   })
});

module.exports = router;
