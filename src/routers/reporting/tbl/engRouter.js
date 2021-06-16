const express = require('express')
const router = new express.Router()
const {getENG,insertENG,updateENG,getOneENG,deleteMom,getSucess,getAllSucess}=require('../../../controller/reporting/tbl/engController')
router.get('/eng',getENG)
router.post('/eng',insertENG)
router.get('/eng/:date',getOneENG)
router.post('/eng/update/:date',updateENG)

// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router