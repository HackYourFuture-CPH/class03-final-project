var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');

/* GET category listing. */
router.post('/content', function(req, res) {
  knex('contents').insert({
    categories: req.body.categories,
    description:req.body.description,
    difficulty:req.body.difficulty,
    link:req.body.link,
    title:req.body.title,
    type:req.body.type
  })
  .then(function (result){
    res.json({ success: true, message: 'ok' });
    res.send(result);
  })
});


/* GET category listing. */
router.get('/content/:id', function(req, res) {
 
  knex('contents').where({id: req.params.id}).select().then( function(data) {
    console.log(data);
    res.send(data[0]);

    
  });
});

module.exports = router;

