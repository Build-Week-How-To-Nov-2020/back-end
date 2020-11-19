const db = require('../config')

const Step = require("./stepModel")

async function getGuides(id = false) {
    let guides
    if (id) {
        guides = await db('guides').where('id', id)
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
    let guide = db('guides').insert({title: data.title, description: data.description, userId: data.userId})

    return guide
}

async function updateGuide(id, guide) {

}

async function deleteGuide(id) {
    // find the guide, if guide exists delete
    let guide = db('guides').where('id', id)

    if (guide.length > 0) {
        db('guides').where('id', id).delete()
    } else {
        // raise an error
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
