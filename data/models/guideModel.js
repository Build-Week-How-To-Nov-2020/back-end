const db = require('../config')

const Step = require("./stepModel")

//get a single guide with an ID or it returns a list of all guides
async function getGuides(guideId = false) {
    try {
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
    catch (error) {
        return {'error': error}
    }
}

async function createGuide(data) {
    // title, description, userId
    try {
        let [id] = await db('guides').insert({title: data.title, description: data.description, userId: parseInt(data.userId)})

        return id
    }
    catch (error) {
        return error
    }
}

async function updateGuide(guideId, data) {
    try {
        return db('guides').where('id', guideId).update({title: data.title, description: data.description, userId: data.userId})
    }
    catch (error) {
        return error
    }
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
