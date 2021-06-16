const express = require('express')
require('dotenv').config()
var cors = require('cors')
const db = require('./db')
const morgan = require('morgan');
const { json } = require('express')
var bodyParser = require('body-parser')
//Routers


//------Sadun-----------
const production = require('./routers/reporting/tbl/productionRouter')
const quality = require('./routers/reporting/tbl/qualityRouter')
const hr = require('./routers/reporting/tbl/hrRouter')
const bead = require('./routers/reporting/tbl/beadRouter')
const mixing = require('./routers/reporting/tbl/mixingRouter')
const eng = require('./routers/reporting/tbl/engRouter')
const hold = require('./routers/reporting/tbl/holdRouter')
const machineCost = require('./routers/reporting/tbl/machineCostRouter')

//----------------rccm--------------

const productionrccm = require('./routers/reporting/tbl/productionRccmRouter')
const qualityrccm  =require('./routers/reporting/tbl/qualityRccmRouter')
const hrrccm = require('./routers/reporting/tbl/hrRccmRouter')
const beadrccm = require('./routers/reporting/tbl/beadRccmRouter')
const mixingrccm = require('./routers/reporting/tbl/mixingRccmRouter')
const engrccm = require('./routers/reporting/tbl/engRccmRouter')
const holdrccm = require('./routers/reporting/tbl/holdRccmRouter')

///
const rccm = require('./routers/reporting/tbl/rccmRouter')
//-------------------------------

const builder =require('./routers/reporting/tbl/reportRouter')
//------------chart-----------

const linechart = require('./routers/reporting/tbl/lineChartRouter')
 const barchart = require('./routers/reporting/tbl/mtdRouter')



// icpc////////////////

const icpc = require('./routers/reporting/tbl/icPcRouter')

////////////////////////////
const mom =require('./routers/reporting/tbl/momRouter')

//////////////////detail
const momdetail = require('./routers/reporting/tbl/detailRouter')

////////////dashboard/////////////////
const dashboarddetail = require('./routers/reporting/tbl/dashBoardRouter')




/////////////////////////////////////////////////////////////////////////////

const pressdetail = require('./routers/reporting/tbl/pressRouter')

const pressbuilderdetail = require('./routers/reporting/tbl/builderPressRouter')

//------Bandara------------
// const snDetailRouter = require('./routers/detailsFrmParams/snRouter')
// const specRouter = require('./routers/tbls/specTblRouter')
// const authRouter = require('./routers/tbls/authRouter')
// const pidRouter = require('./routers/tbls/pidRouter')
// const bcomprout = require('./routers/tbls/compound/bcompRout')
// const ccomprout = require('./routers/tbls/compound/ccompRout')
// const trcomprout = require('./routers/tbls/compound/trcompRout')
// const bandRout = require('./routers/tbls/bandRouter')
// const stockRout = require('./routers/tbls/stockRouter')
// const tireCode = require('./routers/tbls/tirecodeRouter')
// const auth = require('./routers/authontication/userRouter')
// const fi = require('./routers/tbls/final_inspectionRouter')
// const mold = require('./routers/tbls/moldRouter')
// const spec = require('./routers/tbls/specTblRouter')
// const compsg = require('./routers/tbls/compsgRouter')
// const lstBatch = require('./routers/tbls/lastbatchRouter')
// const temptires = require('./routers/tbls/tempTiresRouter')


const app = express()
app.use(morgan('tiny'));
app.use(cors())
app.use(bodyParser.json());
const port = process.env.PORT || 3001




//Route Definition
//----------Sadun-------------
app.use('/reporting',production)
app.use('/reporting',quality)
app.use('/reporting',hr)
app.use('/reporting',bead)
app.use('/reporting',mixing)
app.use('/reporting',eng)
app.use('/reporting',hold)


//--------rccm----------------
app.use('/reporting',productionrccm)

app.use('/reporting',hrrccm)
app.use('/reporting',beadrccm)
app.use('/reporting',mixingrccm)
app.use('/reporting',engrccm)
app.use('/reporting',holdrccm)
app.use('/reporting',qualityrccm)

//////////////

app.use('/reporting',rccm)

/////////--------linrchart--------
app.use('/reporting',linechart)

app.use('/reporting',barchart)

//-----------mfg-////////////////////////////
app.use('/mfg',builder)


///ICPC///////////////

app.use('/card',icpc)

////////////
app.use('/momdpr',mom)

////////////////////////

app.use('/momdetail',momdetail)


/////////////////////////////////

app.use('/reporting',dashboarddetail)

///////////////////////////////////////

app.use('/pressdata',pressdetail)

app.use('/builderpressdata',pressbuilderdetail)


app.use('/machinecost',machineCost)





//----------Bandara----------
// app.use(snDetailRouter) 
// app.use(specRouter)
// app.use("/auth",authRouter)
// app.use("/pid",pidRouter)
// app.use('/bcomp', bcomprout)
// app.use('/ccomp', ccomprout)
// app.use('/trcomp', trcomprout)
// app.use('/stk', stockRout)
// app.use('/auth', auth)
// app.use('/fi',fi)
// app.use('/tirecode/', tireCode)
// app.use('/mold',mold)
// app.use('/spec', spec)
// app.use('/compsg', compsg)
// app.use('/lastbatch', lstBatch)
// app.use('/temptires', temptires)


//Middle vare for express
app.use(express.json())
app.use(express)





app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
 
