const express = require('express')
const pool = require('../../../db')
const db = require('../../../db')
const router = new express.Router()

router.use(express.json())

exports.getPressOther = async (req, res) => {
    try {
        const results = await db.query(`select * from std.press_other_data ORDER BY date DESC LIMIT 60 `)
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
exports.insertPressOther = async (req, res) => {
    console.log(req.body);
  
    try {
      const results = await db.query(
        "INSERT INTO std.press_other_data ( kaizen,nearmiss,ra,nra,bd,shift,date,press_no) values ( $1, $2,$3,$4,$5,$6,$7,$8) returning *",
        [req.body.kaizen,req.body.nearmiss,req.body.ra, req.body.nra, req.body.bd, req.body.shift, req.body.date,req.body.press_no]
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

 
  
  exports.getOnePressOther= async (req, res) => {
    
  //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
    try {
      const results = await db.query(
        "select * from std.press_other_data WHERE id=$1",
        [req.params.id]
      );

     
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

  exports.deletePressOther = async (req, res) => {
    try {
      const results = db.query("DELETE FROM std.press_other_data where id = $1", [
        req.params.id,
      ]);
      res.status(204).json({
        status: "sucess",
      });
    } catch (err) {
      console.log(err);
    }
  }


exports.updatePressOther = async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE std.press_other_data SET  kaizen = $1, nearmiss = $2,ra=$3 ,nra=$4,bd=$5,shift=$6,date=$7,press_no = $8 where id = $9 ",
      [req.body.kaizen,req.body.nearmiss,req.body.ra,req.body.nra,req.body.bd,req.body.shift,req.body.date,req.body.press_no,req.params.id]
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










///////////////////////line



exports.getPressLine = async (req, res) => {
  try {
      const results = await db.query(`select * from std.press_line_data ORDER BY date DESC LIMIT 60 `)
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
exports.insertPressLine = async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO std.press_Line_data (date, shift,mp,dot,head_count,ai,ani,line_no) values ( $1, $2,$3,$4,$5,$6,$7,$8) returning *",
      [req.body.date, req.body.shift, req.body.mp, req.body.dot, req.body.head_count, req.body.ai, req.body.ani,req.body.line_no]
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



exports.getOnePressLine= async (req, res) => {
  
//select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
  try {
    const results = await db.query(
      "select * from std.press_line_data WHERE id=$1",
      [req.params.id]
    );

   
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

exports.deletePressLine = async (req, res) => {
  try {
    const results = db.query("DELETE FROM std.press_line_data where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "sucess",
    });
  } catch (err) {
    console.log(err);
  }
}


exports.updatePressLine = async (req, res) => {
try {
  const results = await db.query(
    "UPDATE std.press_line_data SET  date = $1, shift= $2,mp=$3 ,dot=$4,head_count=$5,ai=$6,ani=$7,line_no=$8 where id = $9 ",
    [req.body.date,req.body.shift,req.body.mp,req.body.dot,req.body.head_count,req.body.ai,req.body.ani,req.body.line_no,req.params.id]
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