const db = require('../config')

const Step = require("./stepModel")

async function getGuides(guideId = false) {
    let guides
    if (guideId) {
        guides = await db('guides').where('id', guideId)
    } else {
        guides = await db('guides')
    }

    let steps = guides.map((guide) => {
        return getStepRelation(guide)
    })

    return Promise.all(steps)
        .then((values) => {
            return values
        })
        .catch((error) => {
            console.log(error)
        })
}

async function createGuide(data) {
    // title, description, userId
    let [id] = await db('guides').insert({title: data.title, description: data.description, userId: data.userId})

    return id
}

async function updateGuide(guideId, data) {
    return db('guides').where('id', guideId).update({title: data.title, description: data.description, userId: data.userId})
}

async function deleteGuide(id) {
    // find the guide, if guide exists delete
    try {
        return db('guides').where('id', id).delete()
    }
    catch (error) {
        return error
    }
}

async function getStepRelation(guide) {
    let steps = await Step.getStepsForGuide(guide.id)

    return {...guide, steps: steps}
}

module.exports = {
    getGuides,
    createGuide,
    updateGuide,
    deleteGuide
}
