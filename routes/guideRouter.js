const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Guide = require("../data/models/guideModel")

const router = express.Router()

// get all guides
router.get('/', async (request, response, next) => {
    let guides = await Guide.getGuides()

    response.status(200).json({"message": "Hello World", "guides": guides})
})

// get guides for a user
router.get('/:userId', async (request, response, next) => {
    response.status(200).json({"message": "Hello World", "userId": request.params.userId})
})

// create a guide
router.post('/', async (request, response, next) => {
    response.status(200).json({"message": "Hello World", "guide": request.body})
})

// edit a guide
router.put('/:guideId', async (request, response, next) => {
    response.status(200).json({"message": "Hello World", "guideId": request.params.guideId})
})

// delete a guide
router.delete('/:guideId', async (request, response, next) => {
    response.status(200).json({"message": "Hello World", "guideId": request.params.guideId})
})

module.exports = router
