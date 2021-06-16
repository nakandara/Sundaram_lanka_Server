const express = require('express')
const router = new express.Router()
const {getBead,insertBead,updateBead,getOneBead,deleteMom,getSucess,getAllSucess}=require('../../../controller/reporting/tbl/beadController')
router.get('/bead',getBead)
router.post('/bead',insertBead)
router.get('/bead/:date',getOneBead)
router.post('/bead/update/:date',updateBead)

// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router