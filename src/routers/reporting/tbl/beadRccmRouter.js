const express = require('express')
const router = new express.Router()
const { json } = require('express')
const {getBeadRccm,insertBeadRccm,updateBeadRccm,getOneBeadRccm,deleteMom,getSucess,getAllSucess}=require('../../../controller/reporting/tbl/beadRccmController')

router.post('/bead/rccm',insertBeadRccm)
router.get('/beads/rccm',getBeadRccm)

router.put('/bead/rccm/:id/update',updateBeadRccm)
router.get('/bead/rccm/:id',getOneBeadRccm)


// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router