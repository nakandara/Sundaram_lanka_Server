const express = require('express')
const router = new express.Router()
const { json } = require('express')


const {getmom,insertmom,updatemom,getOnemom,deletemom,insertmomsucess,getAllmomsucess,getOnemomfmwise}=require('../../../controller/reporting/tbl/momController')
router.get('/mom',getmom)
router.post('/mom',insertmom)
router.post('/mom/update/:id',updatemom)
router.get('/mom/:id',getOnemom)
router.get('/mom/fourm/:four_m',getOnemomfmwise)
router.delete('/mom/:id/delete',deletemom)
router.post('/mom/completed',insertmomsucess)
router.get('/mom/completed/:dateOne/:dateTwo',getAllmomsucess)
module.exports = router