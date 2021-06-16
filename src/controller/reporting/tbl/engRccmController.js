const express = require('express')
const pool = require('../../../db')
const db = require('../../../db')
const bodyParser = require("body-parser");

const router = new express.Router()

router.use(express.json())

exports.getENGRccm= async (req, res) => {
    try {
        const results = await db.query(`select * from std.eng_rccm ORDER BY in_date DESC   `)
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


//Insert a complet row to mfg.compsg table
exports.insertENGRccm = async (req, res) => {
    console.log(req.body);
  
    try {
      const results = await db.query(
        "INSERT INTO std.eng_rccm (in_date,ap_no,accountability, metix,target_date,actual,reason_achive_not_target,root_cause,counter_measure,resp,target,status,category) values ( $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) returning *",
        [req.body.in_date, req.body.ap_no, req.body.accountability, req.body.metix, req.body.target_date, req.body.actual,req.body.reason_achive_not_target, req.body.root_cause, req.body.counter_measure,req.body.resp,req.body.target,req.body.status,req.body.category]
      );
      console.log(results.rows);
      res.status(201).json({
        status: "succes",
        data: {
          data: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

 
  
  exports.getOneENGRccm= async (req, res) => {
    
  //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
    try {
      const results = await db.query(
        "select * from std.eng_rccm WHERE id=$1",
        [req.params.id]
      );

      //
      // select * from restaurants wehre id = req.params.id
  
      // const reviews = await db.query(
      //   "select * from reviews where restaurant_id = $1",
      //   [req.params.id]
      // );
       console.log(results.rows);
  
      res.status(200).json({
        status: "succes",
        data: {
          data: results.rows[0],
          // reviews: reviews.rows,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  exports.deleteMom = async (req, res) => {
    try {
      const results = db.query("DELETE FROM std.mom where id = $1", [
        req.params.id,
      ]);
      res.status(204).json({
        status: "sucess",
      });
    } catch (err) {
      console.log(err);
    }
  }

  exports.getSucess =async (req, res) => {
    console.log(req.body);
  
    try {
      const results = await db.query(
        "INSERT INTO std.sucessmom (point_discussed, countermeasure, responsible,target_date,revised_date,rating) values ( $1,$2,$3,$4,$5,$6) returning *",
        [req.body.point_discussed, req.body.countermeasure, req.body.responsible, req.body.target_date, req.body.revised_date, req.body.rating]
      );
      console.log(results);
      res.status(201).json({
        status: "succes",
        data: {
          restaurant: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  exports.getAllSucess = async (req, res) => {
    try {
      //const results = await db.query("select * from restaurants");
      const restaurantRatingsData = await db.query(`select * from std.sucessmom WHERE target_date BETWEEN '${req.params.dateOne}' AND '${req.params.dateTwo}' `
        // "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;"
      );
      res.status(200).json({
        status: "success",
        results: restaurantRatingsData.rows.length,
        data: {
          restaurants: restaurantRatingsData.rows,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }


//   exports.updateMom = async (req, res) => {
//     try {
//          const results = await db.query(
//               `UPDATE std.mom SET  point_discussed = ${req.body.point_discussed}, countermeasure = ${req.body.countermeasure}, responsible = ${req.body.responsible},target_date=${req.body.target_date} ,revised_date=${req.body.revised_date},rating=${req.body.rating} where id = ${req.params.id}  `,   
//          );
//          res.status(200).json({
//                status: "succes",
//                 data: {
//                   mom: results.rows[0],
//                 },
//              })

//     } catch (err) {
//          console.log(err);
//     }
// }

// exports.updateRccm = async (req, res) => {
//   try { 
     
//     const results = await db.query(
//       "UPDATE sltl.rccm SET  in_date =$1,ap_no =$2,accountability=$3, metix=$4,target_date=$5,actual=$6,reason_achive_not_target=$7,root_cause=$8,counter_measure=$9,resp=$10,target=$11,status=$12 where id = $13 ",
//       [req.body.in_date, req.body.ap_no, req.body.accountability, req.body.metix, req.body.target_date, req.body.actual,req.body.reason_achive_not_target, req.body.root_cause, req.body.counter_measure,req.body.resp,req.body.target,req.body.status,req.params.date]
//     );

//     res.status(200).json({
//       status: "succes",
//       data: {
//         data:results.rows[0],
//       },
//     });
//   } 
//   catch (err) {
//     console.log(err);
//   }
//   //console.log(req.params.id);
//   console.log(results);
// }  


exports.updateENGRccm = async (req, res) => {

  const{in_date,ap_no,accountability,metix,target_date,actual,reason_achive_not_target,root_cause,counter_measure,resp,target,status} = req.body
  const {id} = req.params

  try {
    console.log(req.body);

    // const resu = await db.query(
    //   "UPDATE sltl.rccm SET in_date =$1,ap_no =$2 , accountability=$3,metix=$4,target_date=$5,actual=$6,reason_achive_not_target=$7,root_cause=$8,counter_measure=$9,resp=$10,target=$11,status=$12 where   id = $13 ",
    //   [req.body.in_date,req.body.ap_no,req.body.accountability, req.body.metix, req.body.target_date, req.body.actual,req.body.reason_achive_not_target,req.body.root_cause,req.body.counter_measure,req.body.resp,req.body.target,req.body.status,req.params.date]
    // );

    const resu = await db.query(
      "UPDATE std.eng_rccm SET ap_no = $2,accountability=$3,metix=$4,target_date=$5,actual=$6,reason_achive_not_target=$7,root_cause=$8,counter_measure=$9,resp=$10,target=$11,status=$12 where   id = $1 ",
      [id,ap_no,accountability,metix,target_date,actual,reason_achive_not_target,root_cause,counter_measure,resp,target,status]
    );
    
    res.status(200).json({
      status: "succes",
      data: {
        data: resu.rows[0],
      },
    });

  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
}