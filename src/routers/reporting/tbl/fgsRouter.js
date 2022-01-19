const express = require('express')
const router = new express.Router()
const {fgsadddataclient,getfgs,getoneRowfgs,getCounttireStock,tirestockAcuracy,getPdi,updateFgs,getoneshipmentPlan}=require('../../../controller/reporting/tbl/fgsController')

// pramod work under
router.post('/fgs',fgsadddataclient)
router.get('/getfgs',getfgs)
router.get('/getoneRowfgs/:date',getoneRowfgs)
router.get('/getcount/tirestock/:dateOne/:dateTwo',getCounttireStock)
router.get('/tirestockAcuracy/target/:dateOne/:dateTwo',tirestockAcuracy)
router.get('/getPdi/:date',getPdi)
router.post('/fgsAccuracy/update/:date',updateFgs)
router.get('/getoneshipmentPlan/:date',getoneshipmentPlan)



module.exports = router