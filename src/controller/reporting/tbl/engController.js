const express = require('express')
const pool = require('../../../db')
const db = require('../../../db')
const router = new express.Router()

router.use(express.json())

exports.getENG= async (req, res) => {
    try {
        const results = await db.query(`select * from std.eng_data ORDER BY date DESC LIMIT 21  `)
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
exports.insertENG = async (req, res) => {
    console.log(req.body);
  
    try {
      const results = await db.query(
        "INSERT INTO std.eng_data (date,energy_cost_kg,energy_cost_kg_plan, energy_consumed,energy_consumed_plan,break_down,break_down_plan,firewood_cost_rate,firewood_cost_rate_plan,oil,oil_plan,pm,pm_plan) values ( $1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) returning *",
        [req.body.date, req.body.energy_cost_kg, req.body.energy_cost_kg_plan, req.body.energy_consumed, req.body.energy_consumed_plan, req.body.break_down, req.body.break_down_plan, req.body.firewood_cost_rate,req.body.firewood_cost_rate_plan,req.body.oil,req.body.oil_plan,req.body.pm,req.body.pm_plan]
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

 
  
  exports.getOneENG= async (req, res) => {
    
  //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
    try {
      const results = await db.query(
        "select * from std.eng_data WHERE date=$1",
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

exports.updateENG = async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE std.eng_data SET  energy_cost_kg = $1, energy_consumed = $2,break_down=$3 ,firewood_cost_rate=$4,oil=$5,pm=$6,pm_plan=$7 where date = $8 ",
      [req.body.energy_cost_kg,req.body.energy_consumed,req.body.break_down,req.body.firewood_cost_rate,req.body.oil,req.body.pm,req.body.pm_plan,req.params.date]
    );

    res.status(200).json({
      status: "succes",
      data: {
        mom: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  console.log(req.body);
}