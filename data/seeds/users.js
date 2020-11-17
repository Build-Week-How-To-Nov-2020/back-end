
exports.seed = async function(knex) {
  await knex("users").insert([
    {id: 1, username: "Tiffany", password: "bay123"},
    {id: 2, username: "Susan", password: "bay123"}
  ])
};
