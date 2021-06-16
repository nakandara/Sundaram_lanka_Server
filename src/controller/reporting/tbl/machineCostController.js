const express = require('express')
const pool = require('../../../db')
const db = require('../../../db')
const router = new express.Router()

router.use(express.json())

exports.getMachineCost = async (req, res) => {
    try {
        const results = await db.query(`select * from std.machine_cost_data ORDER BY date DESC   `)
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
exports.insertMachineCost = async (req, res) => {
    console.log(req.body);
  
    try {
      const results = await db.query(
        "INSERT INTO std.machine_cost_data (date, pm_cost,bd_cost, pro_cost,machine_name) values ( $1, $2,$3,$4,$5) returning *",
        [req.body.date, req.body.pm_cost, req.body.bd_cost, req.body.pro_cost, req.body.machine_name]
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

 
  
  exports.getOneMachineCost= async (req, res) => {
    
  //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
    try {
      const results = await db.query(
        "select * from std.machine_cost_data WHERE id=$1",
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

  exports.getDashMachineCost= async (req, res) => {
    
    //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
      try {
        const results = await db.query(
          `SELECT * FROM std.machine_cost_data   where date >='${req.params.dateone}' and date <='${req.params.datetwo}' and machine_name='${req.params.machine_name}'`
          
        );
  
     
    
        res.status(200).json({
          status: "succes",
          data: {
            data: results.rows,
            // reviews: reviews.rows,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }


    exports.getDashMachineCostTotal= async (req, res) => {
    
      //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
        try {
          const results = await db.query(
            `SELECT * FROM std.machine_cost_data   where date >='${req.params.dateone}' and date <='${req.params.datetwo}' `
            
          );
    
       
      
          res.status(200).json({
            status: "succes",
            data: {
              data: results.rows,
              // reviews: reviews.rows,
            },
          });
        } catch (err) {
          console.log(err);
        }
      }
  










  exports.deleteMachineCost = async (req, res) => {
    try {
      const results = db.query("DELETE FROM std.machine_cost_data where id = $1", [
        req.params.id,
      ]);
      res.status(204).json({
        status: "sucess",
      });
    } catch (err) {
      console.log(err);
    }
  }

  // exports.getSucess =async (req, res) => {
  //   console.log(req.body);
  
  //   try {
  //     const results = await db.query(
  //       "INSERT INTO std.sucessmom (point_discussed, countermeasure, responsible,target_date,revised_date,rating) values ( $1,$2,$3,$4,$5,$6) returning *",
  //       [req.body.point_discussed, req.body.countermeasure, req.body.responsible, req.body.target_date, req.body.revised_date, req.body.rating]
  //     );
  //     console.log(results);
  //     res.status(201).json({
  //       status: "succes",
  //       data: {
  //         restaurant: results.rows[0],
  //       },
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // exports.getAllSucess = async (req, res) => {
  //   try {
  //     //const results = await db.query("select * from restaurants");
  //     const restaurantRatingsData = await db.query(`select * from std.sucessmom WHERE target_date BETWEEN '${req.params.dateOne}' AND '${req.params.dateTwo}' `
  //       // "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;"
  //     );
  //     res.status(200).json({
  //       status: "success",
  //       results: restaurantRatingsData.rows.length,
  //       data: {
  //         restaurants: restaurantRatingsData.rows,
  //       },
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }


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

exports.updateMachineCost = async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE std.machine_cost_data SET  pm_cost = $1, bd_cost = $2 ,pro_cost=$3,machine_name=$4  where id = $5 ",
      [req.body.pm_cost,req.body.bd_cost,req.body.pro_cost,req.body.machine_name,req.params.id]
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