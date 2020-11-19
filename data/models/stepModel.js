const db = require('../config')

async function getStepsForGuide(guideId) {
    return db('steps').where('guideId', '=', guideId)
}

async function createStep(step) {

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
