const express = require('express')
const router = new express.Router()
const {getDashBoard}=require('../../../controller/reporting/tbl/dashBoardController')



router.get('/dashboard/:kpi/:tablename/:date',getDashBoard)


// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router