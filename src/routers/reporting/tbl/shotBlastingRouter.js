const express = require('express')
const router = new express.Router()
const {shotblasting,getShotBlasting,getshotBlastingForDash}=require('../../../controller/reporting/tbl/shotBlastingController')

// pramod work under

router.post('/shotblasting',shotblasting)
router.get('/getShotBlasting',getShotBlasting)
router.get('/getshotBlastingForDash/:date',getshotBlastingForDash)

module.exports = router