const db = require('../config')

async function getGuides() {
    let guides = await db('guides')
    if(guides) {
        return guides
    } else {
        return []
    }
}

async function getGuideById(id) {

}

async function createGuide(guide) {

}

async function updateGuide(id, guide) {

}

async function deleteGuide(id) {

}

module.exports = {
    getGuides,
    getGuideById,
    createGuide,
    updateGuide,
    deleteGuide
}
