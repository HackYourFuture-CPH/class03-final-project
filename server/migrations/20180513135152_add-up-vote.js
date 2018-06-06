
exports.up = function(knex, Promise) {
  const p1 = knex.raw('alter table items add rate_up int(10) default 0;');
  const p2 = knex.raw('alter table items add rate_down int(10) default 0;');

  return Promise.all([p1, p2]);
};

exports.down = function(knex, Promise) {

};
