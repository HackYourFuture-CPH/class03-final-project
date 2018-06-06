
exports.up = function(knex, Promise) {
  const p1 = knex.raw(`update type set name='article' where id=1`)
  const p2 = knex.raw(`update type set name='video' where id=2`);
  const p3 = knex.raw(`update type set name='other' where id=3`);


  return Promise.all([p1, p2, p3]);
};

exports.down = function(knex, Promise) {

};
//  UPDATE mytable
//     SET column1 = value1,
//         column2 = value2
//     WHERE key_value = some_value;
