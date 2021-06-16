const express = require('express')
const pool = require('../../../db')
const db = require('../../../db')
const router = new express.Router()

router.use(express.json())

exports.getQuality = async (req, res) => {
    try {
        const results = await db.query(`select * from std.quality_data ORDER BY date DESC LIMIT 76  `)
        res.status(200).json({ 
            status: "succes",
            data: {
                data:results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
}


//Insert a complet row to mfg.compsg table
exports.insertQuality = async (req, res) => {
    console.log(req.body);
  const {date,flash,flash_plan,ftr,ftr_plan,b,b_plan,ea,e_plan,r,r_plan,l,l_plan,c,c_plan,nm_dirty_tires,nm_dirty_tires_plan,berlc,berlc_plan} =req.body
    try {
      const results = await db.query(
        "INSERT INTO std.quality_data (date,flash,flash_plan,ftr,ftr_plan,b,b_plan,ea,e_plan,r,r_plan,l,l_plan,c,c_plan,nm_dirty_tires,nm_dirty_tires_plan,berlc,berlc_plan) values ( $1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19) returning *",
        [date,flash,flash_plan,ftr,ftr_plan,b,b_plan,ea,e_plan,r,r_plan,l,l_plan,c,c_plan,nm_dirty_tires,nm_dirty_tires_plan,berlc,berlc_plan]
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

 
  
  exports.getOneQuality= async (req, res) => {
    
  //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
    try {
      const results = await db.query(
        "select * from std.quality_data WHERE date=$1",
        [req.params.date]
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

exports.updateQuality = async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE std.quality_data SET  flash= $1, ftr = $2,b=$3 ,ea=$4,r=$5,l=$6,c=$7,berlc=$8,nm_dirty_tires=$9 where date = $10 ",
      [req.body.flash,req.body.ftr,req.body.b,req.body.ea,req.body.r,req.body.l,req.body.c,req.body.berlc,req.body.nm_dirty_tires,req.params.date]
    );

    res.status(200).json({
      status: "succes",
      data: {
        mom: results.rows[0],
      },
    });
    console.log(results.row);
  } catch (err) {
    console.log(err);
  }
  
  console.log(req.body);
}