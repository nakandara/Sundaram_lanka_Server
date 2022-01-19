const express = require("express");
const pool = require("../../../db");
const db = require("../../../db");
const router = new express.Router();

router.use(express.json());


exports.shotblasting = async (req, res) => {
    console.log(req.body);
    const { date,m1_plan,m2_plan,m1_actual,m2_actual } = req.body;
    try {
      const results = await db.query(
        'INSERT INTO std.shot_blasting (date,m1_plan,m2_plan,m1_actual,m2_actual) values ($1,$2,$3,$4,$5) returning *',
        [date,m1_plan,m2_plan,m1_actual,m2_actual]
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
  };


  //get shot blasting data for deta entry panel
  exports.getShotBlasting = async (req, res) => {
    try {
      const results = await db.query(
        `select * from std.shot_blasting ORDER BY date DESC LIMIT 76 `
      );
      res.status(200).json({
        status: "succes",
        data: {
          data: results.rows,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
// get shot blast for dashbord
exports.getshotBlastingForDash= async (req, res) => {
    
    //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
      try {
        const results = await db.query(
          "select * from std.shot_blasting WHERE date=$1",
          [req.params.date]
        );
  
         console.log(results.rows);
    
        res.status(200).json({
          status: "succes",
          
          data: {
            data: results.rows,
          },
          
        });
        console.log(
  
        )
      } catch (err) {
        console.log(err);
      }
    }