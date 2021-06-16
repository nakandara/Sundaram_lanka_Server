const express = require('express')
const pool = require('../../../db')
const db = require('../../../db')
const router = new express.Router()

router.use(express.json())

exports.getLineChart = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT date,${req.params.kpione},${req.params.kpitwo} FROM std.${req.params.division} WHERE date >= '${req.params.dateone}' AND  date <='${req.params.datetwo}' order by date asc `)
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


exports.getPieChart = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT   (${req.params.condition}(${req.params.kpione})) AS total
        FROM std.${req.params.division}
        WHERE date>= '${req.params.dateone}'  and date<= '${req.params.datetwo}'`)
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






