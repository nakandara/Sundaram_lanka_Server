const express = require('express')
const router = new express.Router()
const { json } = require('express')
const {getHRRccm,insertHRRccm,updateHRRccm,getOneHRRccm,deleteMom,getSucess,getAllSucess}=require('../../../controller/reporting/tbl/hrRccmController')

router.post('/hr/rccm',insertHRRccm)
router.get('/hrd/rccm',getHRRccm)

router.put('/hr/rccm/:id/update',updateHRRccm)
router.get('/hr/rccm/:id',getOneHRRccm)


// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router