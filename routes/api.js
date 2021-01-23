
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


//not sure how to do or where to put aggregate - render stats? 

// db.Workout.aggregate(
//     [
//         {$match: {} },
//         {$group: {_id: "$duration", total: {$sum: "$total"}} }
//     ]
// );

// const aggregate = Model.aggregate([
//     { $duration: {noidea: 1 } },
// ]);
// Model.
//     aggregate([{ $match: { totalDuration: $duration}}])

// totalDuration(),
//     result = db.Workout.aggregate([
//         { "$match": {"_id" : "$duration", "total": {"$sum" : total}}},
        
//     ]
//     );





module.exports = router;

