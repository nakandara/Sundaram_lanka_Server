const express = require('express')
const pool = require('../../../db')
const db = require('../../../db')
const router = new express.Router()

router.use(express.json())

exports.getDetail = async (req, res) => {
    try {
        const results = await db.query(`select * from std.detail where date>=$1 and date <=$2 and shift =$3 ORDER BY id ASC`,[req.params.dateOne,req.params.dateTwo,req.params.category])
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


exports.getDetailAll = async (req, res) => {
  try {
      const results = await db.query(`select * from std.detail  ORDER BY id ASC`)
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
exports.insertDetail = async (req, res) => {
    console.log(req.body);
  
    try {
      const results = await db.query(
        "INSERT INTO std.detail (reported_person,observation, responsible,action,date,shift,status) values ( $1, $2,$3,$4,$5,$6,$7) returning *",
        [req.body.reported_person, req.body.observation, req.body.responsible, req.body.action, req.body.date, req.body.shift,req.body.status]
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

 
  
  exports.getOneDetail= async (req, res) => {
    console.log(req.params.id);
  //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
    try {
      const result = await db.query(
        "select * from std.detail WHERE id = $1",
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

exports.updateDetail = async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE std.detail SET reported_person=$1,observation =$2, responsible =$3,action =$4,date=$5,shift=$6,status=$7 where id = $8 ",
      [req.body.reported_person, req.body.observation, req.body.responsible, req.body.action, req.body.date, req.body.shift,req.body.status,req.params.id]
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