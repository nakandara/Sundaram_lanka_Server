const express = require('express')
const pool = require('../../../db')
const db = require('../../../db')
const router = new express.Router()

router.use(express.json())

exports.getPressWiseShift = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT press_no,${req.params.condition}(weight) AS "total"
        FROM std.press_new_data
         where date >= '${req.params.paramDate}  07:00' and date <= '${req.params.paramDateTwo}  07:00'  and shift ='${req.params.shift}' and tyre_type ='${req.params.type}' GROUP BY press_no`)
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


exports.getPressWiseTotal = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT press_no,${req.params.condition}(weight) AS "total"
        FROM std.press_new_data
         where date > '${req.params.paramDate} 07:00' and date < '${req.params.paramDateTwo} 07:00'  and  tyre_type ='${req.params.type}' GROUP BY press_no`)
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


exports.getPressWiseShiftAllPress = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT press_no,${req.params.condition}(weight) AS "total"
        FROM std.press_new_data
         where date >= '${req.params.paramDate}  07:00' and date <= '${req.params.paramDateTwo}  07:00'  and shift ='${req.params.shift}' and tyre_type ='${req.params.type}' GROUP BY press_no `)
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



exports.getPressWiseTotalAllPress = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT press_no,${req.params.condition}(weight) AS "total"
        FROM std.press_new_data
         where date > '${req.params.paramDate} 07:00' and date < '${req.params.paramDateTwo} 07:00'  and  tyre_type ='${req.params.type}' GROUP BY press_no`)
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
