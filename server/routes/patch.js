var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');


router.patch('/', function(req, res, next) {
    return knex('items').where('id', req.body.id)
           .update({
             rate_up:req.body.rate_up,
             rate_down:req.body.rate_down
            })
           .then( function (result) {
            res.json({ success: true, message: 'ok' });
            })
            .catch(function(err){
              res.send(err)
            })
});

module.exports = router;
