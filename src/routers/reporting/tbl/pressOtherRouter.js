const express = require('express')
const router = new express.Router()
const {getPressOther,insertPressOther,updatePressOther,getOnePressOther,deletePressOther,
       getPressLine,insertPressLine,updatePressLine,getOnePressLine,deletePressLine}=require('../../../controller/reporting/tbl/pressOtherController')
router.get('/pressother',getPressOther)
router.post('/pressother',insertPressOther)
router.get('/pressother/:id',getOnePressOther)
router.post('/pressother/update/:id',updatePressOther)

 router.delete('/pressother/delete/:id',deletePressOther)
// router.post('/mom/sucess',getSucess)


router.get('/pressline',getPressLine)
router.post('/pressline',insertPressLine)
router.get('/pressline/:id',getOnePressLine)
router.post('/pressline/update/:id',updatePressLine)

 router.delete('/pressline/delete/:id',deletePressLine)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router