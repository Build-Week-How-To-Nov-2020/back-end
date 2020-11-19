const db = require('../config')

async function getStep(stepId) {
    return db('steps').where('id', stepId)
}

async function getStepsForGuide(guideId) {
    return db('steps').where('guideId', '=', guideId)
}

async function createStep(data, guideId) {
    if (typeof guideId !== "undefined") {
        let [id] = await db('steps').insert({title: data.title, instruction: data.instruction, guideId: guideId})
        return id
    } else {
        return -1
    }
}

async function updateStep(stepId, data) {
    return db('steps').where('id', stepId).update({title: data.title, instruction: data.instruction})
}

async function deleteStep(stepId) {
    try {
        return db('steps').where('id', stepId).delete()
    }
    catch (error) {
        return error
    }
}

module.exports = {
    getStepsForGuide,
    createStep,
    updateStep,
    deleteStep
}
