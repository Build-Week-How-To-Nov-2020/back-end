const db = require("../data/config")

async function add(user){
    const [id] = await db("users").insert(user)
        return findByUserId(id)
}

async function findByUserId(id){
    return await db("users")
        .select("username", "id")
        .where("id",id)
}

async function findBy(username){
    return await db("users")
        .select("username")
        .where("username", username)
        
}

module.exports = {
    add,
    findBy,
    findByUserId
}
