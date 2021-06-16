const express = require('express')
const router = new express.Router()
const { json } = require('express')
const {getQualityRccm,insertQualityRccm,updateQualityRccm,getOneQualityRccm}=require('../../../controller/reporting/tbl/QualityRccmController')

router.post('/quality/rccm',insertQualityRccm)
router.get('/quality/rccm/:id',getOneQualityRccm)
router.get('/qualityy/rccm',getQualityRccm)

router.put('/quality/rccm/:id/update',updateQualityRccm)



// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router