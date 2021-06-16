const express = require('express')
const router = new express.Router()
const {getMTDSum}=require('../../../controller/reporting/tbl/mtdController')



router.get('/mtdsum/:condition/:kpi/:kpiplan/:division/:dateonemtd/:datetwomtd',getMTDSum)
// router.post('/bead',insertBead)
// router.get('/bead/:date',getOneBead)
// router.post('/bead/update/:date',updateBead)

// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router