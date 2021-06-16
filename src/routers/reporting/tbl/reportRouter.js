const express = require('express')
const router = new express.Router()
const {getBuilder,getBuilderMTD,getBuilderFirst,getBuilderSecond,getBuilderThird,getBuilderFourth,getBuilderFive,getBuilderSix,getBuilderSeven,getBuilderEight,getBuilderFirstCount,getBuilderSecondCount,getBuilderThirdCount,getBuilderFourthCount,getBuilderFiveCount,getBuilderSixCount,getBuilderSevenCount, getBuilderCount,getBuilderCountMTD,
    getBuilderEightCount,getQualityCountA,getQualitySumWeightA, getQualityCountR, getQualitySumWeightR, getQualityCountE, getQualitySumWeightE, getQualityCountB,getQualitySumWeightB, getQualityCountL, getQualitySumWeightL, getQualityCountAplus, getQualitySumWeightAplus, getQualityCountAMTD, getQualitySumWeightAMTD, getQualitySumWeightBMTD, getQualityCountBMTD, getQualitySumWeightEMTD, getQualityCountEMTD, getQualitySumWeightRMTD, getQualityCountRMTD, getQualitySumWeightLMTD, getQualityCountLMTD, getQualitySumWeightAplusMTD, getQualityCountAplusMTD } = require('../../../controller/reporting/tbl/reportController')

router.get('/builder/one/:parmData',getBuilderFirst)
router.get('/builder/two/:parmData',getBuilderSecond)
router.get('/builder/three/:parmData',getBuilderThird)
router.get('/builder/four/:parmData',getBuilderFourth)
router.get('/builder/five/:parmData',getBuilderFive)
router.get('/builder/six/:parmData/:parmDataTwo',getBuilderSix)
router.get('/builder/seven/:parmDataTwo',getBuilderSeven)
router.get('/builder/eight/:parmDataTwo',getBuilderEight)


 router.get('/builder/one/count/:parmData',getBuilderFirstCount)
 router.get('/builder/two/count/:parmData',getBuilderSecondCount)
 router.get('/builder/three/count/:parmData',getBuilderThirdCount)
 router.get('/builder/four/count/:parmData',getBuilderFourthCount)
 router.get('/builder/five/count/:parmData',getBuilderFiveCount)
 router.get('/builder/six/count/:parmData/:parmDataTwo',getBuilderSixCount)
 router.get('/builder/seven/count/:parmDataTwo',getBuilderSevenCount)
router.get('/builder/eight/count/:parmDataTwo',getBuilderEightCount)


router.get('/builder/mtd/:parmDataThree/:parmDataTwo',getBuilderMTD)
router.get('/builder/count/mtd/:parmDataThree/:parmDataTwo',getBuilderCountMTD)

////////////////////////////////////////////////////////////////////////////

router.get('/quality/count/a/:parmData/:parmDataTwo',getQualityCountA)
router.get('/quality/sum/a/:parmData/:parmDataTwo',getQualitySumWeightA)

router.get('/quality/count/b/:parmData/:parmDataTwo',getQualityCountB)
router.get('/quality/sum/b/:parmData/:parmDataTwo',getQualitySumWeightB)

router.get('/quality/count/e/:parmData/:parmDataTwo',getQualityCountE)
router.get('/quality/sum/e/:parmData/:parmDataTwo',getQualitySumWeightE)

router.get('/quality/count/r/:parmData/:parmDataTwo',getQualityCountR)
router.get('/quality/sum/r/:parmData/:parmDataTwo',getQualitySumWeightR)

router.get('/quality/count/l/:parmData/:parmDataTwo',getQualityCountL)
router.get('/quality/sum/l/:parmData/:parmDataTwo',getQualitySumWeightL)

router.get('/quality/count/apl/:parmData/:parmDataTwo',getQualityCountAplus)
router.get('/quality/sum/apl/:parmData/:parmDataTwo',getQualitySumWeightAplus)



///////////////////MTD
router.get('/quality/a/mtd/:parmDataThree/:parmDataTwo',getQualitySumWeightAMTD)
router.get('/quality/a/count/mtd/:parmDataThree/:parmDataTwo',getQualityCountAMTD)

router.get('/quality/b/mtd/:parmDataThree/:parmDataTwo',getQualitySumWeightBMTD)
router.get('/quality/b/count/mtd/:parmDataThree/:parmDataTwo',getQualityCountBMTD)

router.get('/quality/e/mtd/:parmDataThree/:parmDataTwo',getQualitySumWeightEMTD)
router.get('/quality/e/count/mtd/:parmDataThree/:parmDataTwo',getQualityCountEMTD)

router.get('/quality/r/mtd/:parmDataThree/:parmDataTwo',getQualitySumWeightRMTD)
router.get('/quality/r/count/mtd/:parmDataThree/:parmDataTwo',getQualityCountRMTD)

router.get('/quality/l/mtd/:parmDataThree/:parmDataTwo',getQualitySumWeightLMTD)
router.get('/quality/l/count/mtd/:parmDataThree/:parmDataTwo',getQualityCountLMTD)

router.get('/quality/apl/mtd/:parmDataThree/:parmDataTwo',getQualitySumWeightAplusMTD)
router.get('/quality/apl/count/mtd/:parmDataThree/:parmDataTwo',getQualityCountAplusMTD)


/////////////////////////////////////////////////////////////////////////////

router.get('/builder/:parmData/:parmDataTwo',getBuilder)
router.get('/builder/count/:parmData/:parmDataTwo',getBuilderCount)

// router.post('/mom',insertMom)
// router.post('/mom/update/:id',updateMom)
// router.get('/mom/:id',getOneMom)
// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router