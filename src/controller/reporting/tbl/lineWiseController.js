const express = require('express')
const pool = require('../../../db')
const db = require('../../../db')
const router = new express.Router()

router.use(express.json())

exports.getLineWiseCountShift = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT f.tyre_type,ROUND(count(b.actwgt)) AS "total"  from mfg.builder b join std.press_new_data f on f.sn = b.sn  where b.mfgdate >'${req.params.dateone} 07:00' and b.mfgdate <'${req.params.datetwo} 07:00' and f.press_no='${req.params.pressno}' and shift='${req.params.shift}' and tyre_type='${req.params.type}'  GROUP BY
        f.tyre_type
        ORDER BY total`)
        res.status(200).json({ 
            status: "succes",
            data: {
                data: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
}
//////////////////////////////


exports.getLineWiseCountTotal = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT f.tyre_type,ROUND(count(b.actwgt)) AS "total"  from mfg.builder b join std.press_new_data f on f.sn = b.sn  where b.mfgdate >'${req.params.dateone} 07:00' and b.mfgdate <'${req.params.datetwo} 07:00' and f.press_no='${req.params.pressno}' and  tyre_type='${req.params.type}'  GROUP BY
        f.tyre_type
        ORDER BY total `)
        res.status(200).json({ 
            status: "succes",
            data: {
                data: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
}

///////////////////////////////
exports.getLineWiseSumShift = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT f.tyre_type,ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join std.press_new_data f on f.sn = b.sn  where b.mfgdate >'${req.params.dateone} 07:00' and b.mfgdate <'${req.params.datetwo} 07:00' and f.press_no='${req.params.pressno}' and shift='${req.params.shift}' and tyre_type='${req.params.type}'  GROUP BY
        f.tyre_type
        ORDER BY total; `)
        res.status(200).json({ 
            status: "succes",
            data: {
                data: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
}
////////////////////////////////////
exports.getLineWiseSumTotal = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT f.tyre_type,ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join std.press_new_data f on f.sn = b.sn  where b.mfgdate >'${req.params.dateone} 07:00' and b.mfgdate <'${req.params.datetwo} 07:00' and f.press_no='${req.params.pressno}'  and tyre_type='${req.params.type}'  GROUP BY
        f.tyre_type
        ORDER BY total`)
        res.status(200).json({ 
            status: "succes",
            data: {
                data: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
}
/////////////////////////////


exports.getOnlyLineWiseCountShift = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT f.tyre_type,ROUND(count(b.actwgt)) AS "total"  from mfg.builder b join std.press_new_data f on f.sn = b.sn  where b.mfgdate >'${req.params.dateone} 07:00' and b.mfgdate <'${req.params.datetwo} 07:00'  and shift='${req.params.shift}' and tyre_type='${req.params.type}'  GROUP BY
        f.tyre_type
        ORDER BY total`)
        res.status(200).json({ 
            status: "succes",
            data: {
                data: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
}
//////////////////////////////


exports.getOnlyLineWiseCountTotal = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT f.tyre_type,ROUND(count(b.actwgt)) AS "total"  from mfg.builder b join std.press_new_data f on f.sn = b.sn  where b.mfgdate >'${req.params.dateone} 07:00' and b.mfgdate <'${req.params.datetwo} 07:00' and  tyre_type='${req.params.type}'  GROUP BY
        f.tyre_type
        ORDER BY total `)
        res.status(200).json({ 
            status: "succes",
            data: {
                data: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
}

///////////////////////////////
exports.getOnlyLineWiseSumShift = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT f.tyre_type,ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join std.press_new_data f on f.sn = b.sn  where b.mfgdate >'${req.params.dateone} 07:00' and b.mfgdate <'${req.params.datetwo} 07:00' and shift='${req.params.shift}' and tyre_type='${req.params.type}'  GROUP BY
        f.tyre_type
        ORDER BY total; `)
        res.status(200).json({ 
            status: "succes",
            data: {
                data: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
}
////////////////////////////////////
exports.getOnlyLineWiseSumTotal = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT f.tyre_type,ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join std.press_new_data f on f.sn = b.sn  where b.mfgdate >'${req.params.dateone} 07:00' and b.mfgdate <'${req.params.datetwo} 07:00'  and tyre_type='${req.params.type}'  GROUP BY
        f.tyre_type
        ORDER BY total`)
        res.status(200).json({ 
            status: "succes",
            data: {
                data: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
}