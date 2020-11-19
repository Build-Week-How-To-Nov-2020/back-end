
exports.seed = async function(knex) {
  await knex("usersHowTo").insert([
    {id: 1, howToName: "Make Ice", howToStory: "The flower that blooms in adversity is the most rare and beautiful of all – Mulan", users_id:1 },
    {id: 2, howToName: "Ovens", howToStory: "Your identity is your most valuable possession. Protect it – The Incredibles", users_id:3 },
    {id: 3, howToName: "Make earrings", howToStory: "You want something done, you’ve got to do it yourself – The Little Mermaid", users_id:5 },
    {id: 4, howToName: "Start a Charity", howToStory: "Being brave doesn’t mean you go looking for trouble – The Lion King", users_id:5 },
    {id: 5, howToName: "Life forever", howToStory: "I don’t want to survive. I want to live – WALL-E", users_id: 8}
  
  ])
};