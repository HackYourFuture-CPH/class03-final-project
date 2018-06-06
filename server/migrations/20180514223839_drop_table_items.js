
exports.up = function(knex, Promise) {
  return knex.schema.dropTable('items');

};

exports.down = function(knex, Promise) {

};
