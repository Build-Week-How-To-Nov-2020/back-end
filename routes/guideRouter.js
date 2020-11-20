const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Guide = require('../data/models/guideModel')
const Step = require('../data/models/stepModel')

const router = express.Router()

// get all guides
router.get('/', async (request, response, next) => {
    try {
        let guides = await Guide.getGuides()

        response.json(guides)
    }
    catch (error) {
        next(error)
    }
})

// get guide by id
router.get('/:guideId', async (request, response, next) => {
    try {
        let id = request.params.guideId
        let guide = await Guide.getGuides(id)

        if (guide.length > 0) {
            response.status(200).json({guide: guide})
        } else {
            response.status(404).json({"message": "Guide not found."})
        }
    }
    catch (error) {
        next(error)
    }
})

// create a guide
router.post('/', async (request, response, next) => {
    if (request.body.title && request.body.userId) {
        let data = {
            title: request.body.title,
            description: request.body.description,
            userId: request.body.userId,
            steps: request.body.steps || []
        }

        try {
            // build a guide
            let guideId = await Guide.createGuide(data)

            // build steps
            let steps = data.steps.map((step) => {
                return Step.createStep(step, guideId)
            })

            // wait for all of the steps to finish creating then return the guide with it's steps
            Promise.all(steps)
                .then( async (values) => {
                    return response.status(200).json({guide: await Guide.getGuides(guideId)})
                })
                .catch((error) => {
                    console.error(error)
                })

        } catch (error) {
            next(error)
        }
    } else {
        return response.status(400).json({"message": "missing required information"})
    }
})

// edit a guide
router.put('/:guideId', async (request, response, next) => {
    let id = request.params.guideId

    let data = {
        title: request.body.title,
        description: request.body.description,
        userId: request.body.userId,
        steps: request.body.steps || []
    }

    try {
        // edit the guide
        let guide = await Guide.updateGuide(id, data)

        // edit the steps
        let steps = data.steps.map((step) => {
            return Step.updateStep(step.id, step)
        })

        // wait for the all the promises to finish then return the result
        Promise.all(steps)
            .then(async (values) => {
                return response.status(200).json({guide: await Guide.getGuides(id)})
            })
            .catch((error) => {
                console.error(error)
            })
    }
    catch (error) {
        next(error)
    }
})

// delete a guide
router.delete('/:guideId', async (request, response, next) => {
    // delete the guide, the steps are set to cascade
    try {
        let deleted = await Guide.deleteGuide(request.params.guideId)

        if (deleted > 0) {
            response.status(200).json(deleted)
        } else {
            response.status(404).json({"message": "Guide not found, unable to remove."})
        }
    }
    catch (error) {
        next(error)
    }
})

module.exports = router
