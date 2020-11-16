const db = require("../data/config")

async function add(user){
    const [id] = await db("users").insert(user)
        return findByUserId(id)
}

async function findByUserId(id){
    return await db("users")
        .select("username", "id")
        .where("id", id)
}

async function findBy(username){
    return db("users")
        .where("username", username)
        .first()
}

module.exports = {
    add,
    findBy,
    findByUserId
}
