const express = require('express')
const router = new express.Router()
const {getLineChart,getPieChart} = require('../../../controller/reporting/tbl/lineChartController')

router.get('/linechart/:kpione/:kpitwo/:division/:dateone/:datetwo',getLineChart)
router.get('/piechart/:condition/:kpione/:division/:dateone/:datetwo',getPieChart)
// router.post('/mom',insertMom)
// router.post('/mom/update/:id',updateMom)
// router.get('/mom/:id',getOneMom)
// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router