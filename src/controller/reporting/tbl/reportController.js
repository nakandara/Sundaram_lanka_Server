const express = require('express')
const pool = require('../../../db')
const db = require('../../../db')
const router = new express.Router()

router.use(express.json())

exports.getBuilder = async (req, res) => {
    try {
      console.log('ok');
        const results = await db.query(`SELECT ROUND(SUM(actwgt), 2) AS "total"
        FROM mfg.builder
         where mfgdate > '${req.params.parmData} 07:00' and mfgdate < '${req.params.parmDataTwo} 07:00'`)
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
//////////////////////////////
exports.getBuilderMTD = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(actwgt), 2) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmDataThree} 07:00' and mfgdate < '${req.params.parmDataTwo} 07:00'`)
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
/////////////////////////////
exports.getBuilderCountMTD = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT COUNT ( actwgt) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmDataThree} 07:00' and mfgdate < '${req.params.parmDataTwo} 07:00'`)
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

////////////////////////////
exports.getBuilderCount = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT COUNT (  actwgt) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmData} 07:00' and mfgdate < '${req.params.parmDataTwo} 07:00'`)
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

  //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
    // try {
    //   const restaurant = await db.query(
    //     "select * from std.mom WHERE id = $1",
    //     [req.params.id]
    //   );
      // select * from restaurants wehre id = req.params.id
  
      // const reviews = await db.query(
      //   "select * from reviews where restaurant_id = $1",
      //   [req.params.id]
      // );
      // console.log(reviews);
  
  //     res.status(200).json({
  //       status: "succes",
  //       data: {
  //         mom: restaurant.rows[0],
  //         // reviews: reviews.rows,
  //       },
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // exports.deleteMom = async (req, res) => {
  //   try {
  //     const results = db.query("DELETE FROM std.mom where id = $1", [
  //       req.params.id,
  //     ]);
  //     res.status(204).json({
  //       status: "sucess",
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

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

// exports.updateMom = async (req, res) => {
//   try {
//     const results = await db.query(
//       "UPDATE std.mom SET point_discussed = $1, countermeasure = $2, responsible = $3,target_date=$4 ,revised_date=$5,rating=$6 where id = $7 ",
//       [req.body.point_discussed,req.body.countermeasure,req.body.responsible,req.body.target_date,req.body.revised_date,req.body.rating,req.params.id]
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
// }



//first 3 hour

exports.getBuilderFirst = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(actwgt), 2) AS "total"
      FROM mfg.builder  where mfgdate > '${req.params.parmData} 07:00' and mfgdate < '${req.params.parmData} 09:00'`)
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


//second 3 hour

exports.getBuilderSecond = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(actwgt), 2) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmData} 10:00' and mfgdate < '${req.params.parmData} 13:00'`)
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

///third hour
exports.getBuilderThird = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(actwgt), 2) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmData} 13:00' and mfgdate < '${req.params.parmData} 16:00'`)
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

//forth  builder
exports.getBuilderFourth = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(actwgt), 2) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmData} 16:00' and mfgdate < '${req.params.parmData} 19:00'`)
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


///five builder

exports.getBuilderFive = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(actwgt), 2) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmData} 19:00' and mfgdate < '${req.params.parmData} 22:00'`)
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




//six builder

exports.getBuilderSix = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(actwgt), 2) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmData} 22:00' and mfgdate < '${req.params.parmDataTwo} 01:00'`)
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

//seven 
exports.getBuilderSeven = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(actwgt), 2) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmDataTwo} 01:00' and mfgdate < '${req.params.parmDataTwo} 04:00'`)
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

//eight
exports.getBuilderEight = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(actwgt), 2) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmDataTwo} 04:00' and mfgdate < '${req.params.parmDataTwo} 07:00'`)
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


//first 3 hour

exports.getBuilderFirstCount = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT COUNT (  actwgt) AS "total"
      FROM mfg.builder  where mfgdate > '${req.params.parmData} 07:00' and mfgdate < '${req.params.parmData} 09:00'`)
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


//second 3 hour

exports.getBuilderSecondCount = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT COUNT (actwgt) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmData} 10:00' and mfgdate < '${req.params.parmData} 13:00'`)
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

///third hour
exports.getBuilderThirdCount = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT COUNT ( actwgt) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmData} 13:00' and mfgdate < '${req.params.parmData} 16:00'`)
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

//forth  builder
exports.getBuilderFourthCount = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT COUNT (  actwgt) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmData} 16:00' and mfgdate < '${req.params.parmData} 19:00'`)
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


///five builder

exports.getBuilderFiveCount = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT COUNT (  actwgt) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmData} 19:00' and mfgdate < '${req.params.parmData} 22:00'`)
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




//six builder

exports.getBuilderSixCount = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT COUNT (  actwgt) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmData} 22:00' and mfgdate < '${req.params.parmDataTwo} 01:00'`)
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

//seven 
exports.getBuilderSevenCount = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT COUNT (  actwgt) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmDataTwo} 01:00' and mfgdate < '${req.params.parmDataTwo} 04:00'`)
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

//eight
exports.getBuilderEightCount = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT COUNT (actwgt) AS "total"
      FROM mfg.builder
       where mfgdate > '${req.params.parmDataTwo} 04:00' and mfgdate < '${req.params.parmDataTwo} 07:00'`)
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


//////////////////////////////////////////////// QUALITY DAY

exports.getQualityCountA = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT count (b.actwgt) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmData} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='A'`)
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

/////////////////////////////////////////////


exports.getQualitySumWeightA = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmData} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='A'`)
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


////////////////////////////////////////////////

exports.getQualityCountB = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT count (b.actwgt) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmData} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='B'`)
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

/////////////////////////////////////////////


exports.getQualitySumWeightB = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmData} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='B'`)
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


////////////////////////////////////////////////

exports.getQualityCountE = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT count (actwgt) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmData} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='E'`)
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

/////////////////////////////////////////////


exports.getQualitySumWeightE = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmData} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='E'`)
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

////////////////////////////////////////////////

exports.getQualityCountR = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT count (b.actwgt) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmData} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='R'`)
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

/////////////////////////////////////////////


exports.getQualitySumWeightR = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmData} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='R'`)
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

////////////////////////////////////////////////

exports.getQualityCountL = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT count (actwgt) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmData} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='L'`)
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

/////////////////////////////////////////////


exports.getQualitySumWeightL = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmData} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='L'`)
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




////////////////////////////

////////////////////////////////////////////////

exports.getQualityCountAplus= async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT count (b.actwgt) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmData} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='A+'`)
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

/////////////////////////////////////////////


exports.getQualitySumWeightAplus = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmData} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='A+'`)
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




////////////////////////////


///////////////////////////////////
//////////////////////////////////////////////// QUALITY MTD

exports.getQualityCountAMTD = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT count (b.actwgt) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmDataThree} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='A'`)
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

/////////////////////////////////////////////


exports.getQualitySumWeightAMTD = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmDataThree} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='A'`)
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


////////////////////////////////////////////////

exports.getQualityCountBMTD = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT count (b.actwgt) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmDataThree} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='B'`)
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

/////////////////////////////////////////////


exports.getQualitySumWeightBMTD = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmDataThree} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='B'`)
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


////////////////////////////////////////////////

exports.getQualityCountEMTD = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT count (actwgt) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmDataThree} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='E'`)
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

/////////////////////////////////////////////


exports.getQualitySumWeightEMTD = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmDataThree} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='E'`)
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

////////////////////////////////////////////////

exports.getQualityCountRMTD = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT count (b.actwgt) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmDataThree} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='R'`)
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

/////////////////////////////////////////////


exports.getQualitySumWeightRMTD = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmDataThree} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='R'`)
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

////////////////////////////////////////////////

exports.getQualityCountLMTD = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT count (actwgt) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmDataThree} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='L'`)
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

/////////////////////////////////////////////


exports.getQualitySumWeightLMTD = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmDataThree} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='L'`)
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




////////////////////////////

////////////////////////////////////////////////

exports.getQualityCountAplusMTD= async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT count (b.actwgt) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmDataThree} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='A+'`)
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

/////////////////////////////////////////////


exports.getQualitySumWeightAplusMTD = async (req, res) => {
  try {
    console.log('ok');
      const results = await db.query(`SELECT ROUND(SUM(b.actwgt), 2) AS "total"  from mfg.builder b join quality.final_inspection f on f.sn = b.sn  where b.mfgdate >'${req.params.parmDataThree} 07:00' and b.mfgdate <'${req.params.parmDataTwo} 07:00'  and f.grade='A+'`)
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




////////////////////////////




