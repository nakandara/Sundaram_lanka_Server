const express = require('express')
const router = new express.Router()
const { json } = require('express')
const {getRccm}=require('../../../controller/reporting/tbl/rccmController')


router.get('/rccm/:divrccm/:category/:dateOne/:dateTwo',getRccm)





module.exports = router