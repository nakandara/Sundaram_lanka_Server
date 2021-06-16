const express = require('express')
const router = new express.Router()
const { json } = require('express')
const {getHoldRccm,insertHoldRccm,updateHoldRccm,getOneHoldRccm,deleteMom,getSucess,getAllSucess}=require('../../../controller/reporting/tbl/holdRccmController')

router.post('/hold/rccm',insertHoldRccm)
router.get('/holdand/rccm',getHoldRccm)

router.put('/hold/rccm/:id/update',updateHoldRccm)
router.get('/hold/rccm/:id',getOneHoldRccm)


// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router