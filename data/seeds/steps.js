exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('steps').del()
        .then(function () {
            // Inserts seed entries
            return knex('steps').insert([
                {id: 1, title: 'step one', instruction: 'stuff', guideId: 1},
                {id: 2, title: 'step two', instruction: 'stuff', guideId: 1},
                {id: 3, title: 'step three', instruction: 'stuff', guideId: 1},
                {id: 4, title: 'step one', instruction: 'stuff', guideId: 2},
                {id: 5, title: 'step two', instruction: 'stuff', guideId: 2},
                {id: 6, title: 'step three', instruction: 'stuff', guideId: 2},
                {id: 7, title: 'step one', instruction: 'stuff', guideId: 3},
                {id: 8, title: 'step two', instruction: 'stuff', guideId: 3},
                {id: 9, title: 'step three', instruction: 'stuff', guideId: 3}
            ]);
        });
};
