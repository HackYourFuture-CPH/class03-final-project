
exports.up = function(knex, Promise) {
  return knex.schema.createTable('type',
    function (t) {
       t.increments('id').unsigned().primary();
       t.string('name').notNull();
   });
};

exports.down = function(knex, Promise) {

};
