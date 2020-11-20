const db = require('../config')

async function getStep(stepId) {
    try {
        return db('steps').where('id', stepId)
    }
    catch (error) {
        return error
    }
}

async function getStepsForGuide(guideId) {
    try {
        return db('steps').where('guideId', '=', guideId)
    }
    catch (error) {
        return error
    }
}

async function createStep(data, guideId) {
    try {
        if (typeof guideId !== "undefined") {
            let [id] = await db('steps').insert({title: data.title, instruction: data.instruction, guideId: guideId})
            return id
        } else {
            return -1
        }
    }
    catch (error) {
        return error
    }
}

async function updateStep(stepId, data) {
    try {
        return db('steps').where('id', stepId).update({title: data.title, instruction: data.instruction})
    }
    catch (error) {
        return error
    }
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
