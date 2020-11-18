
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('guides').del()
    .then(function () {
      // Inserts seed entries
      return knex('guides').insert([
        {id: 1, title: 'guide one', description: 'stuff', userId: 1},
        {id: 2, title: 'guide two', description: 'stuff', userId: 1},
        {id: 3, title: 'guide three', description: 'stuff', userId: 1}
      ]);
    });
};
