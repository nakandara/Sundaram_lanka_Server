const express = require('express')
const router = new express.Router()
const {getHR,insertHR,updateHR,getOneHR,deleteMom,getSucess,getAllSucess}=require('../../../controller/reporting/tbl/hrController')
router.get('/hr',getHR)
router.post('/hr',insertHR)
router.get('/hr/:date',getOneHR)
router.post('/hr/update/:date',updateHR)

// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router