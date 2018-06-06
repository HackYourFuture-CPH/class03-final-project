
exports.seed = function(knex, Promise) {
      return knex('type').insert([
        {name: 'article'},
        {name: 'video'},
        {name: 'other'}
      ]);
};

// exports.seed = function(knex, Promise) {
//   return knex('type').del()
//     .then(function () {
//       return knex('type').insert([
//         {name: 'article'},
//         {name: 'video'},
//         {name: 'other'}
//       ]);
//     });
// };
