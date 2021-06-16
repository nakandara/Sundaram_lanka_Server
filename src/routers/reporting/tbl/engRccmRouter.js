const express = require('express')
const router = new express.Router()
const { json } = require('express')
const {getENGRccm,insertENGRccm,updateENGRccm,getOneENGRccm,deleteMom,getSucess,getAllSucess}=require('../../../controller/reporting/tbl/engRccmController')

router.post('/eng/rccm',insertENGRccm)
router.get('/engi/rccm',getENGRccm)

router.put('/eng/rccm/:id/update',updateENGRccm)
router.get('/eng/rccm/:id',getOneENGRccm)


// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router