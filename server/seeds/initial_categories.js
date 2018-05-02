
exports.seed = function(knex, Promise) {
  return knex('contents').del()
    .then(function () {
      return knex('contents').insert([
        {categories: 'Webdesign',difficulty:'basic',link:'www.dk',title:'java',type:'audio', description: 'Web design (HTML/CSS)'},
       
 
      ]);
    });
};
