const express = require('express')
const pool = require('../../../db')
const db = require('../../../db')
const router = new express.Router()

router.use(express.json())

exports.getSn = async (req, res) => {
    try {
        const results = await db.query(`select * from std.press_new_data ORDER BY sn DESC LIMIT 21  `)
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
exports.insertSn = async (req, res) => {
    console.log(req.body);
  
    try {
      const results = await db.query(
        "INSERT INTO std.press_new_data (sn,press_no,shift,tyre_type,date,weight,load_time) values ( $1, $2,$3,$4,$5,$6,$7) returning *",
        [req.body.sn, req.body.press_no, req.body.shift, req.body.tyre_type,req.body.date,req.body.weight,req.body.load_time]
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

 
  
  exports.getOneSn= async (req, res) => {
    
  //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
    try {
      const results = await db.query(
        "select * from std.press_new_data WHERE sn=$1",
        [req.params.sn]
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

  exports.deleteSn = async (req, res) => {
    try {
      const results = db.query("DELETE FROM std.press_new_data where sn = $1", [
        req.params.id,
      ]);
      res.status(204).json({
        status: "sucess",
      });
    } catch (err) {
      console.log(err);
    }
  }

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

exports.updateSn = async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE std.press_new_data SET  sn = $1, press_no = $2,shift=$3 ,tyre_type=$4 ,load_time=$5 where sn = $6 ",
      [req.body.sn,req.body.press_no,req.body.shift,req.body.tyre_type,req.body.load_time,req.params.sn]
    );

    res.status(200).json({
      status: "succes",
      data: {
        data: results.rows[0],
      },
    });
    console.log(results);
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  
}





exports.getHR = async (req, res) => {
  try {
      const results = await db.query(`select * from std.hr_data ORDER BY date DESC LIMIT 14  `)
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
exports.insertHR = async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO std.hr_data (date, absent_inform,absent_inform_plan, absent_non_inform,absent_non_inform_plan,late,late_plan,man_power,man_power_plan,dot,dot_plan,reportable_accident,reportable_accident_plan,near_miss,near_miss_plan,kaizen,kaizen_plan,training,training_plan,non_reportable_accident,non_reportable_accident_plan) values ( $1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21) returning *",
      [req.body.date, req.body.absent_inform, req.body.absent_inform_plan, req.body.absent_non_inform, req.body.absent_non_inform_plan, req.body.late, req.body.late_plan, req.body.man_power,req.body.man_power_plan,req.body.dot,req.body.dot_plan,req.body.reportable_accident,req.body.reportable_accident_plan,req.body.near_miss,req.body.near_miss_plan,req.body.kaizen,req.body.kaizen_plan,req.body.training,req.body.training_plan,req.body.non_reportable_accident,req.body.non_reportable_accident_plan]
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



exports.getOneHR= async (req, res) => {
  
//select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
  try {
    const results = await db.query(
      "select * from std.hr_data WHERE date=$1",
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

exports.updateHR = async (req, res) => {
try {
  const results = await db.query(
    "UPDATE std.hr_data SET  absent_inform = $1, absent_non_inform = $2,late=$3 ,man_power=$4,dot=$5,reportable_accident=$6,near_miss=$7,kaizen=$8,training=$9,non_reportable_accident=$10 where date = $11 ",
    [req.body.absent_inform,req.body.absent_non_inform,req.body.late,req.body.man_power,req.body.dot,req.body.reportable_accident,req.body.near_miss,req.body.kaizen,req.body.training,req.body.non_reportable_accident,req.params.date]
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
