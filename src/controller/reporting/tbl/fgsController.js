const express = require("express");
const pool = require("../../../db");
const db = require("../../../db");
const router = new express.Router();

router.use(express.json());

// pramod add fgs data table insert values

exports.fgsadddataclient = async (req, res) => {
  console.log(req.body);
  const { date, fgs_invert,daily_pdi,shipment_dispatch,shipment_plan,actual_stock } = req.body;
  try {
    const results = await db.query(
      'INSERT INTO std.fgs_accuracy (date,fgs_invert,daily_pdi,shipment_dispatch,shipment_plan,actual_stock) values ($1,$2,$3,$4,$5,$6) returning *',
      [date, fgs_invert,daily_pdi,shipment_dispatch,shipment_plan,actual_stock]
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

exports.getfgs = async (req, res) => {
  try {
    const results = await db.query(
      `select * from std.fgs_accuracy ORDER BY date DESC LIMIT 76  `
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


exports.getoneRowfgs= async (req, res) => {
    
  //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
    try {
      const results = await db.query(
        "select * from std.fgs_accuracy WHERE date=$1",
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
          data: results.rows,
          
          // reviews: reviews.rows,
        },
        
      });
      console.log(

      )
    } catch (err) {
      console.log(err);
    }
  }

// pramod get Tire stock Accuracy  target

  exports.getCounttireStock = async (req, res) => {
    try {
      
      const restaurantRatingsData = await db.query(`select count(sn) from mfg.builder where mfgdate between '${req.params.dateOne}' AND '${req.params.dateTwo}' `
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


  //pramod get tire Stock Accuracy target
  exports.tirestockAcuracy = async (req, res) => {
    try {
      
      const restaurantRatingsData = await db.query(`select count(sn) from stock.stk where mfgdate between'${req.params.dateOne}' AND '${req.params.dateTwo}' `
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


  /// grt Pdi detail pramod
  exports.getPdi= async (req, res) => {
    
    //select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1
      try {
        const results = await db.query(
          "select * from std.fgs_accuracy WHERE date=$1",
          [req.params.date]
        );
  
       
         console.log(results.rows);
    
        res.status(200).json({
          status: "succes",
          
          data: {
            data: results.rows,
            
            // reviews: reviews.rows,
          },
          
        });
        console.log(
  
        )
      } catch (err) {
        console.log(err);
      }
    }

    exports.updateFgs = async (req, res) => {
      try {
        const results = await db.query(
          "UPDATE std.fgs_accuracy SET  fgs_invert= $1, daily_pdi = $2,shipment_dispatch=$3 ,shipment_plan=$4,actual_stock=$5 where date = $6 ",
          [req.body.fgs_invert,req.body.daily_pdi,req.body.shipment_dispatch,req.body.shipment_plan,req.body.actual_stock,req.params.date]
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

    // get one fgs shipment plan for data entry interface
    exports.getoneshipmentPlan= async (req, res) => {
    
     
        try {
          const results = await db.query(
            "select shipment_plan from std.fgs_accuracy  WHERE date=$1",
            [req.params.date]
          );
          res.status(200).json(results);
          console.log(results);
          
        } catch (err) {
          console.log(err);
        }
      }
    

    