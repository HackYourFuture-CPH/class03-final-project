var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

/* GET category listing. */
router.post('/', function(req, res, next) {
    knex('contents').where('id',req.body.id).update ({
    upvote: req.body.upvotes+1,
    
  
    thisKeyIsSkipped: undefined

   
 
  })
  .then(function (result){
    res.json({ success: true, message: 'ok' });
   
  })
});

module.exports = router;
