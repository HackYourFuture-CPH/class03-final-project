
exports.up = function(knex, Promise) {
  return knex.schema.dropTable('category');
};

exports.down = function(knex, Promise) {

};
