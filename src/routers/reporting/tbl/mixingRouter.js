const express = require('express')
const router = new express.Router()
const {getMixing,insertMixing,updateMixing,getOneMixing,deleteMom,getSucess,getAllSucess}=require('../../../controller/reporting/tbl/mixingController')
router.get('/mixing',getMixing)
router.post('/mixing',insertMixing)
router.get('/mixing/:date',getOneMixing)
router.post('/mixing/update/:date',updateMixing)

router.delete('/mom/:id/delete',deleteMom)
router.post('/mom/sucess',getSucess)
router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router