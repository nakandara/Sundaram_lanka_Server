const express = require('express')
const pool = require('../../../db')
const db = require('../../../db')
const router = new express.Router()

router.use(express.json())

exports.getmom = async (req, res) => {
   try {
       const results = await db.query(`select * from std.mom ORDER BY id ASC`)
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
exports.insertmom = async (req, res) => {
   console.log(req.body);
 
   try {
     const results = await db.query(
       "INSERT INTO std.mom ( four_m, in_date,disc_date,issue,disc_point,res,status,target_date) values ( $1, $2,$3,$4,$5,$6,$7,$8) returning *",
       [req.body.four_m, req.body.in_date, req.body.disc_date, req.body.issue, req.body.disc_point, req.body.res, req.body.status, req.body.target_date]
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


 
 exports.getOnemom= async (req, res) => {
   console.log(req.params.id);
 //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
   try {
     const result = await db.query(
       "select * from std.mom WHERE id = $1",
       [req.params.id]
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


 exports.getOnemomfmwise= async (req, res) => {
  console.log(req.params.id);
//select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
  try {
    const result = await db.query(
      "select * from std.mom WHERE four_m = $1",
      [req.params.four_m]
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
        data: result.rows,
        // reviews: reviews.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
}







 exports.deletemom = async (req, res) => {
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

 exports.insertmomsucess =async (req, res) => {
   console.log(req.body);
 
   try {
     const results = await db.query(
      "INSERT INTO std.momsucess ( four_m, in_date,disc_date,issue,disc_point,res,status,target_date) values ( $1, $2,$3,$4,$5,$6,$7,$8) returning *",
      [req.body.four_m, req.body.in_date, req.body.disc_date, req.body.issue, req.body.disc_point, req.body.res, req.body.status, req.body.target_date]
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

 exports.getAllmomsucess = async (req, res) => {
   try {
     //const results = await db.query("select * from restaurants");
     const result = await db.query(`select * from std.momsucess WHERE date_in BETWEEN '${req.params.dateOne}' AND '${req.params.dateTwo}' `
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

exports.updatemom= async (req, res) => {
 try {
   const results = await db.query(
     "UPDATE std.mom SET  four_m=$1,disc_date=$2,issue=$3,disc_point=$4,res=$5,status=$6,target_date=$7 where id=$8 ",
     [req.body.four_m, req.body.disc_date, req.body.issue, req.body.disc_point, req.body.res, req.body.status, req.body.target_date,req.params.id]
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