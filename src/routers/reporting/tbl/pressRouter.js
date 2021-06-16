const express = require('express')
const router = new express.Router()
const {getSn,insertSn,updateSn,getOneSn,deleteSn,getSucess,getAllSucess}=require('../../../controller/reporting/tbl/pressController')
router.get('/press',getSn)
router.post('/press',insertSn)
router.get('/press/:sn',getOneSn)
router.post('/press/update/:sn',updateSn)

router.delete('/press/:id',deleteSn)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router