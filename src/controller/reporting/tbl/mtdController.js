const express = require('express')
const pool = require('../../../db')
const db = require('../../../db')
const router = new express.Router()

router.use(express.json())

exports.getMTDSum = async (req, res) => {
    try {
        const results = await db.query(`SELECT
        date_trunc('month', date) summ,
        ${req.params.condition} (${req.params.kpi})actual,${req.params.condition}(${req.params.kpiplan})plan
    FROM
        std.${req.params.division} 
      WHERE date BETWEEN '${req.params.dateonemtd}' AND '${req.params.datetwomtd}'  group by summ  order by summ asc;  `)
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
// exports.insertBead = async (req, res) => {
//     console.log(req.body);
  
//     try {
//       const results = await db.query(
//         "INSERT INTO std.bead_data (date,creel_bead_actual,creel_bead_plan,reject_bead,reject_bead_plan,bead_energy,bead_energy_plan,bead_breakdown,bead_breakdown_plan,bead_productivity_actual,bead_productivity_plan,bead_manpower_actual,bead_manpower_plan) values ( $1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) returning *",
//         [req.body.date, req.body.creel_bead_actual, req.body.creel_bead_plan, req.body.reject_bead, req.body.reject_bead_plan, req.body.bead_energy, req.body.bead_energy_plan, req.body.bead_breakdown,req.body.bead_breakdown_plan,req.body.bead_productivity_actual, req.body.bead_productivity_plan, req.body.bead_manpower_actual, req.body.bead_manpower_plan]
//       );
//       console.log(results);
//       res.status(201).json({
//         status: "succes",
//         data: {
//           data: results.rows[0],
//         },
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }

 
  
//   exports.getOneBead= async (req, res) => {
    
//   //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
//     try {
//       const results = await db.query(
//         "select * from std.bead_data WHERE date=$1",
//         [req.params.date]
//       );

//       //
//       // select * from restaurants wehre id = req.params.id
  
//       // const reviews = await db.query(
//       //   "select * from reviews where restaurant_id = $1",
//       //   [req.params.id]
//       // );
//        console.log(results.rows);
  
//       res.status(200).json({
//         status: "succes",
//         data: {
//           data: results.rows[0],
//           // reviews: reviews.rows,
//         },
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   exports.deleteMom = async (req, res) => {
//     try {
//       const results = db.query("DELETE FROM std.mom where id = $1", [
//         req.params.id,
//       ]);
//       res.status(204).json({
//         status: "sucess",
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   exports.getSucess =async (req, res) => {
//     console.log(req.body);
  
//     try {
//       const results = await db.query(
//         "INSERT INTO std.sucessmom (point_discussed, countermeasure, responsible,target_date,revised_date,rating) values ( $1,$2,$3,$4,$5,$6) returning *",
//         [req.body.point_discussed, req.body.countermeasure, req.body.responsible, req.body.target_date, req.body.revised_date, req.body.rating]
//       );
//       console.log(results);
//       res.status(201).json({
//         status: "succes",
//         data: {
//           restaurant: results.rows[0],
//         },
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   exports.getAllSucess = async (req, res) => {
//     try {
//       //const results = await db.query("select * from restaurants");
//       const restaurantRatingsData = await db.query(`select * from std.sucessmom WHERE target_date BETWEEN '${req.params.dateOne}' AND '${req.params.dateTwo}' `
//         // "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;"
//       );
//       res.status(200).json({
//         status: "success",
//         results: restaurantRatingsData.rows.length,
//         data: {
//           restaurants: restaurantRatingsData.rows,
//         },
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }


// //   exports.updateMom = async (req, res) => {
// //     try {
// //          const results = await db.query(
// //               `UPDATE std.mom SET  point_discussed = ${req.body.point_discussed}, countermeasure = ${req.body.countermeasure}, responsible = ${req.body.responsible},target_date=${req.body.target_date} ,revised_date=${req.body.revised_date},rating=${req.body.rating} where id = ${req.params.id}  `,   
// //          );
// //          res.status(200).json({
// //                status: "succes",
// //                 data: {
// //                   mom: results.rows[0],
// //                 },
// //              })

// //     } catch (err) {
// //          console.log(err);
// //     }
// // }

// exports.updateBead = async (req, res) => {
//   try {
//     const results = await db.query(
//       "UPDATE std.bead_data SET  creel_bead_actual = $1, creel_bead_plan = $2,reject_bead=$3 ,bead_energy=$4,bead_breakdown=$5,bead_productivity_actual=$6,bead_manpower_actual=$7 where date = $8 ",
//       [req.body.creel_bead_actual,req.body.creel_bead_plan,req.body.reject_bead,req.body.bead_energy,req.body.bead_breakdown,req.body.bead_productivity_actual,req.body.bead_manpower_actual,req.params.date]
//     );

//     res.status(200).json({
//       status: "succes",
//       data: {
//         mom: results.rows[0],
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   console.log(req.params.id);
//   console.log(req.body);
//}