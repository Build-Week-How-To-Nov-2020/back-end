const db = require('../config')

async function getStepsForGuide(guideId) {
    return db('steps').where('guideId', '=', guideId)
}

async function createStep(data, guideId) {
    console.log(data, guideId)
    if (typeof guideId !== "undefined") {
        let [id] = await db('steps').insert({title: data.title, instruction: data.instruction, guideId: guideId})
        return id
    } else {
        return -1
    }
}

async function updateStep(id, step) {

}

async function deleteStep(id) {

}

module.exports = {
    getStepsForGuide,
    createStep,
    updateStep,
    deleteStep
}
