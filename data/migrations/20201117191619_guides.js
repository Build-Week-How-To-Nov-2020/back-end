
exports.up = async function(knex) {
    await knex.schema.createTable('guides', (table) => {
        table.increments('id')
        table.string('title')
        table.text('description')
        table.integer('userId')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
    })
};

exports.down =  async function(knex) {
    await knex.schema.dropTableIfExists('guides')
};

