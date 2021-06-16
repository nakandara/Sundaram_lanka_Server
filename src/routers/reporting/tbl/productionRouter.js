const express = require('express')
const router = new express.Router()
const {getProduction,insertProduction,updateProduction,getOneProduction,deleteMom,getSucess,getAllSucess}=require('../../../controller/reporting/tbl/productionController')
router.get('/mom',getProduction)
router.post('/mom',insertProduction)
router.get('/mom/:date',getOneProduction)
router.post('/mom/update/:date',updateProduction)

router.delete('/mom/:id/delete',deleteMom)
router.post('/mom/sucess',getSucess)
router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router