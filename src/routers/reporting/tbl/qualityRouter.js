const express = require('express')
const router = new express.Router()
const {getQuality,insertQuality,updateQuality,getOneQuality,deleteMom,getSucess,getAllSucess}=require('../../../controller/reporting/tbl/qualityController')
router.get('/quality',getQuality)
router.post('/quality',insertQuality)
router.get('/quality/:date',getOneQuality)
router.post('/quality/update/:date',updateQuality)

// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router