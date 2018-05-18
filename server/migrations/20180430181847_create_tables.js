
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items',
       function (t) {
          t.increments('id').unsigned().primary();
          t.string('title').notNull();
          t.string('description');
          t.string('link').notNull();
      });
};

exports.down = function(knex, Promise) {
  return knex.dropTable('items');
};
