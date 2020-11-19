const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Guide = require('../data/models/guideModel')
const Step = require('../data/models/stepModel')

const router = express.Router()

// get all guides
router.get('/', async (request, response, next) => {
    let guides = await Guide.getGuides()

    response.status(200).json({"guides": guides})
})

// get guide by id
router.get('/:guideId', async (request, response, next) => {
    let id = request.params.guideId
    let guide = await Guide.getGuides(id)

    response.status(200).json({"guide": guide})
})

// create a guide
router.post('/', async (request, response, next) => {
    // create a guide
    if (request.body.title && request.body.userId) {
        let data = {title: request.body.title, description: request.body.description, userId: request.body.userId}

        try {
            let guide = Guide.createGuide(data)
        } catch (error) {
            next(error)
        }
    } else {
        return response.status(400).json({"message": "missing required information"})
    }

    // create the steps

    response.status(200).json({"message": "Hello World", "guide": guide})
})

// edit a guide
router.put('/:guideId', async (request, response, next) => {
    // edit the guide

    // edit the steps

    response.status(200).json({"message": "Hello World", "guideId": request.params.guideId, "guide": request.body})
})

// delete a guide
router.delete('/:guideId', async (request, response, next) => {
    // delete the guide, the steps are set to cascade

    response.status(200).json({"message": "Hello World", "guideId": request.params.guideId})
})

module.exports = router
