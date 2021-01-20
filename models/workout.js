const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
        },
    exercises: [{
        type: {
            type: String,
            required: true
        },
        name: {
        type: String,
        required: "must enter workout type"
        },
        weight: {
        type: String,
        },
        sets: {
        type: String,
        },
        reps: {
        type: String,
        },
        distance: {
        type: Number
        },
        duration: {
        type: Number
    }
}
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

  