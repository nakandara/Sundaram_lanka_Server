const express = require('express')
const router = new express.Router()
const { json } = require('express')


const {getIcPc,insertIcPc,updateIcPc,getOneIcPc,deleteIcPc,insertIcPcCompleted,getAllIcPcCompleted}=require('../../../controller/reporting/tbl/icPcController')
router.get('/icpc',getIcPc)
router.post('/icpc',insertIcPc)
router.post('/icpc/update/:card_no',updateIcPc)
router.get('/icpc/:card_no',getOneIcPc)
router.delete('/icpc/:card_no/delete',deleteIcPc)
router.post('/icpc/completed',insertIcPcCompleted)
router.get('/icpc/completed/:dateOne/:dateTwo',getAllIcPcCompleted)
module.exports = router