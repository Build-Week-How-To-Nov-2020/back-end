
exports.seed = async function(knex) {
  await knex("users").insert([
    {username: "Tiffany", password: "bay123"},
    {username: "Susan", password: "Nay345"}
  ])
};
