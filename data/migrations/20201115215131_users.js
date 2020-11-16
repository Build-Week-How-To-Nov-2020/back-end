
exports.up = async function(knex) {
    await knex.schema.createTable("users", (table)=> {
        table.increments("id")
        table.text("username").notNull().unique()
        table.text("password").notNull()
    })

    await knex.schema.createTable("howTo", (table)=> {
        table.increments("id")
        table.text("howToName")
        table.text("howToStory")
        table.integer("users_id")
            .references("id")
            .inTable("users")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
    })
  
};

exports.down = async function(knex) {
   await knex.schema.dropTableIfExists("howTo")
   await knex.schema.dropTableIfExists('users')
};
