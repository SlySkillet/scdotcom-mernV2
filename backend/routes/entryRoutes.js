const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: "Get entries suhn"})
})

router.post('/', (req, res) => {
    res.status(200).json({message: "Create a new entry"})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update entry # ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `delete entry # ${req.params.id}`})
})

module.exports = router
