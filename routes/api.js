
const router = require("express").Router();
const { Model } = require("mongoose");
const  db  = require("../models");
//const Workout = require("../models/workout.js");
//const { db } = require("../models/cardio.js");
//const Cardio = require("../models/cardio.js");
//const Resistance = require("../models/resistance.js");


router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne({_id:req.params.id}, {$push: {exercises: req.body}})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
    .then(results => {
        res.json(results);
    })
    .catch (err => {
        res.json(err);
    });
});

router.get("api/workouts/range", (req, res) => {
    db.Workout.find({}).sort({day:-1}).limit(7)
    .then(results => {
        console.log(results)
        res.json(results);
    })
    .catch(err => {
        res.json(err);
    });
});


router.get("api/workouts/range", (req, res) => {
    db.Workout.aggregate(
    [
        {$match: {} },
        {$group: {_id: "$duration", 
        totalDuration: {$sum: "$exercises.duration"}} }
    ]
    .then(results => {
        console.log(results)
        res.json(results);
    })
    .catch(err => {
        res.json(err)
    
    }));
});
 
router.delete("/delete/:id", (req, res) => {
    db.Workout.remove(
      {
        _id: mongojs.ObjectID(req.params.id)
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });
  
  router.delete("/clearall", (req, res) => {
    db.Workout.remove({}, (error, response) => {
      if (error) {
        res.send(error);
      } else {
        res.send(response);
      }
    });
  });






module.exports = router;

