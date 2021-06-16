const express = require('express')
const router = new express.Router()
const {getDetail,getDetailAll,insertDetail,updateDetail,getOneDetail}=require('../../../controller/reporting/tbl/detailController')

router.get('/detail/:dateOne/:dateTwo/:category',getDetail)
router.get('/detail',getDetailAll)
router.post('/detail',insertDetail)
router.post('/detail/update/:id',updateDetail)
router.get('/detail/:id',getOneDetail)

module.exports = router