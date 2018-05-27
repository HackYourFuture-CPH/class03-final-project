
exports.up = function(knex, Promise) {
    knex.schema.raw('alter table contents modify column upvote number')
  
};

exports.down = function(knex, Promise) {
  
};
