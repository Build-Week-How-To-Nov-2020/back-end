
exports.up = async function(knex) {
    await knex.schema.createTable('steps', (table) => {
        table.increments('id')
        table.string('title')
        table.text('instruction')
        table.integer('guideId')
            .references('id')
            .inTable('guides')
            .onDelete('CASCADE')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('steps')
};
