const express = require('express')
const pool = require('../../../db')
const db = require('../../../db')
const router = new express.Router()

router.use(express.json())

exports.getIcPc = async (req, res) => {
   try {
       const results = await db.query(`select * from std.ic_pc ORDER BY card_no DESC`)
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
exports.insertIcPc = async (req, res) => {
   console.log(req.body);
 
   try {
     const results = await db.query(
       "INSERT INTO std.ic_pc (card_no, date_in, date_out,actual_date_out,issue,reason,corrective_action,preventive_action,shift,person_reporting,epf_no, field,resonable_person,card_type,area) values ( $1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) returning *",
       [req.body.card_no, req.body.date_in, req.body.date_out, req.body.actual_date_out, req.body.issue, req.body.reason, req.body.corrective_action, req.body.preventive_action, req.body.shift, req.body.person_reporting, req.body.epf_no,req.body.field, req.body.resonable_person,req.body.card_type,req.body.area]
     );
     console.log(results);
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


 
 exports.getOneIcPc= async (req, res) => {
   console.log(req.params.id);
 //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
   try {
     const result = await db.query(
       "select * from std.ic_pc WHERE card_no = $1",
       [req.params.card_no]
     );
     // select * from restaurants wehre id = req.params.id
 
     // const reviews = await db.query(
     //   "select * from reviews where restaurant_id = $1",
     //   [req.params.id]
     // );
     // console.log(reviews);
 
     res.status(200).json({
       status: "succes",
       data: {
         data: result.rows[0],
         // reviews: reviews.rows,
       },
     });
   } catch (err) {
     console.log(err);
   }
 }

 exports.deleteIcPc = async (req, res) => {
   try {
     const results = db.query("DELETE FROM std.ic_pc where card_no = $1", [
       req.params.card_no,
     ]);
     res.status(204).json({
       status: "sucess",
     });
   } catch (err) {
     console.log(err);
   }
 }

 exports.insertIcPcCompleted =async (req, res) => {
   console.log(req.body);
 
   try {
     const results = await db.query(
      "INSERT INTO std.ic_pc_completed (card_no, date_in, date_out,actual_date_out,issue,reason,corrective_action,preventive_action,shift,person_reporting,epf_no,field,resonable_person,card_type,area) values ( $1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) returning *",
      [req.body.card_no, req.body.date_in, req.body.date_out, req.body.actual_date_out, req.body.issue, req.body.reason, req.body.corrective_action, req.body.preventive_action, req.body.shift, req.body.person_reporting, req.body.epf_no,req.body.field, req.body.resonable_person,req.body.card_type,req.body.area]
     );
     console.log(results);
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

 exports.getAllIcPcCompleted = async (req, res) => {
   try {
     //const results = await db.query("select * from restaurants");
     const result = await db.query(`select * from std.ic_pc_completed WHERE date_in BETWEEN '${req.params.dateOne}' AND '${req.params.dateTwo}' `
       // "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;"
     );
     res.status(200).json({
       status: "success",
       results: result.rows.length,
       data: {
         data: result.rows,
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

exports.updateIcPc= async (req, res) => {
 try {
   const results = await db.query(
     "UPDATE std.ic_pc SET  date_in=$1, date_out=$2,actual_date_out=$3,issue=$4,reason=$5,corrective_action=$6,preventive_action=$7,shift=$8,person_reporting=$9,epf_no=$10,field=$11,resonable_person =$12 where card_no = $13 ",
     [req.body.date_in, req.body.date_out, req.body.actual_date_out, req.body.issue, req.body.reason, req.body.corrective_action, req.body.preventive_action, req.body.shift, req.body.person_reporting, req.body.epf_no,req.body.field, req.body.resonable_person,req.params.card_no]
   );

   res.status(200).json({
     status: "succes",
     data: {
       data: results.rows[0],
     },
   });
 } catch (err) {
   console.log(err);
 }
 console.log(req.params.id);
 console.log(req.body);
}