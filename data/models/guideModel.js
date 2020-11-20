const db = require('../config')

const Step = require("./stepModel")

async function getGuides(guideId = false) {
    try {
        return await db('guides')

        // let guides
        // if (guideId) {
        //     return await db('guides').where('id', guideId)
        // } else {
        //     return await db('guides')
        // }
        //
        // let steps = guides.map((guide) => {
        //     return getStepRelation(guide)
        // })
        //
        // return Promise.all(steps)
        //     .then((values) => {
        //         return values
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }
    catch (error) {
        return error
    }
}

async function createGuide(data) {
    // title, description, userId
    try {
        let [id] = await db('guides').insert({title: data.title, description: data.description, userId: data.userId})

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
