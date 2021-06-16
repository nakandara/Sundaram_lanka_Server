const express = require('express')
const router = new express.Router()
const {getBuilder,getPress,getOneSn}=require('../../../controller/reporting/tbl/builderPressController')



router.get('/builder/:date/:datetwo',getBuilder)
router.get('/builder/:sn',getOneSn)
router.get('/presses/:datethree/:datefour',getPress)


// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router