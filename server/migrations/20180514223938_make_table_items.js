
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items',
       function (t) {
          t.increments('id').unsigned().primary();
          t.string('title').notNull();
          t.string('description');
          t.string('link').notNull();
          t.integer('category_id').unsigned()
          t.foreign('category_id').references('category.id')
          t.integer('type_id').unsigned()
          t.foreign('type_id').references('type.id')
          t.integer('difficulty_id').unsigned()
          t.foreign('difficulty_id').references('difficulty.id')
      });
};

exports.down = function(knex, Promise) {

};
