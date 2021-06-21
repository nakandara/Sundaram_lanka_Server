const express = require('express')
const router = new express.Router()
const {getLineWiseSumShift,getLineWiseSumTotal,getLineWiseCountShift,getLineWiseCountTotal} = require('../../../controller/reporting/tbl/lineWiseController')

router.get('/presswisesumshift/:dateone/:datetwo/:pressno/:shift/:type',getLineWiseSumShift)
router.get('/presswisesumtotal/:dateone/:datetwo/:pressno/:type',getLineWiseSumTotal)
router.get('/presswisecountshift/:dateone/:datetwo/:pressno/:shift/:type',getLineWiseCountShift)
router.get('/presswisecounttotal/:dateone/:datetwo/:pressno/:type',getLineWiseCountTotal)






// router.post('/mom',insertMom)
// router.post('/mom/update/:id',updateMom)
// router.get('/mom/:id',getOneMom)
// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router