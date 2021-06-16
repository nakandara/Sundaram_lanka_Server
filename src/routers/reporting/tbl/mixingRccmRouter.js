const express = require('express')
const router = new express.Router()
const { json } = require('express')
const {getMixingRccm,insertMixingRccm,updateMixingRccm,getOneMixingRccm,deleteMom,getSucess,getAllSucess}=require('../../../controller/reporting/tbl/mixingRccmController')

router.post('/mixing/rccm',insertMixingRccm)
router.get('/mixin/rccm',getMixingRccm)

router.put('/mixing/rccm/:id/update',updateMixingRccm)
router.get('/mixing/rccm/:id',getOneMixingRccm)


// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router