
exports.up = async function(knex) {
    await knex.schema.createTable('guides', (table) => {
        table.increments('id')
        table.string('title')
        table.text('description')
        table.foreign('userId')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
    })
};

exports.down =  async function(knex) {
    await knex.schema.dropTableIfExists('guides')
};

