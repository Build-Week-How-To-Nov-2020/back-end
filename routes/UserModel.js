const db = require("../data/config")

async function add(user){
    const [id] = await db("users").insert(user,"id")
        return findByUserId(id)
}

async function findByUserId(id){
    return await db("users")
        .select("username", "id")
        .where("id",id)
}

async function findBy(username){
    return await db("users")
        //.select("username")
        .where("username", username)
        .first("username","id", "password")
        
}

async function findAllUsers(){
    return await db("users")
        
}

async function findUser(id){
    return await db("users")
    .where("id", id)
    .first("username", "id")
}

async function findUsersHowTos(id){
    return await db("howTo")
       
        
           .innerJoin("users.id", "users.username")
           .where("howTo.users_id", id)
        .select([
            "howTo.id",
            "howTo.howToName",
            "howTo.howToStory",
            "users.username",
            "users.id"
        ])
        
}


module.exports = {
    add,
    findBy,
    findByUserId,
    findAllUsers,
    findUser,
    findUsersHowTos,
}
