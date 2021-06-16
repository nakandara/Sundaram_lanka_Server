const express = require('express')
const router = new express.Router()
const {getHold,insertHold,updateHold,getOneHold,deleteMom,getSucess,getAllSucess}=require('../../../controller/reporting/tbl/holdController')
router.get('/hold',getHold)
router.post('/hold',insertHold)
router.get('/hold/:date',getOneHold)
router.post('/hold/update/:date',updateHold)

// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router