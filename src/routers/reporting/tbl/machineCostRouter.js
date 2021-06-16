const express = require('express')
const router = new express.Router()
const {getMachineCost,insertMachineCost,updateMachineCost,getOneMachineCost,deleteMachineCost,getDashMachineCost,getDashMachineCostTotal}=require('../../../controller/reporting/tbl/machineCostController')
router.get('/cost',getMachineCost)
router.post('/cost',insertMachineCost)
router.get('/cost/:id',getOneMachineCost)
router.post('/cost/update/:id',updateMachineCost)

 router.delete('/cost/:id/delete',deleteMachineCost)
 router.get('/cost/:dateone/:datetwo/:machine_name',getDashMachineCost)
 router.get('/cost/:dateone/:datetwo',getDashMachineCostTotal)
// router.post('/MoM/sucess',getSucess)
// router.get('/MoM/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router