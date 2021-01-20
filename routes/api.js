
const router = require("express").Router();
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


// router.post("/api/workout", ({ body }, res) => {
//     Workout.create(body)
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });



// router.get("/api/workout", (req, res) => {
//     Workout.find({})
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });



// router.post("/api/resistance", ({ body }, res) => {
//     Resistance.create(body)
//     .then(dbResistance => {
//         res.json(dbResistance);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });



// router.get("/api/resistance", (req, res) => {
//     Resistance.find({})
//     .then(dbResistance => {
//         res.json(dbResistance);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });






// router.get("/workout", (req,res) => {
//     db.Workout.find({})
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.json(err);
//     });
// });

// router.get("/resistance", (req,res) => {
//     db.Resistance.find({})
//     .then(dbResistance => {
//         res.json(dbResistance);
//     })
//     .catch(err => {
//         res.json(err);
//     });
// });



//{ $addFields: { <newField>: <expression>, ... } }

module.exports = router;

//log multiple exercises - name, type, wt, sets, reps, duration 
//cardio/resistance

//add exercises to most recent plan
//add new exercises to new plan
//view combined wt of mult exercises from past 7 workouts on stats pg
//view total duration of each workout from past 7 workouts on stats pg