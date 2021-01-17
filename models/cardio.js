const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
    },    
    name: {
        type: String,
        required: "must enter cardio type"
    },
    distance: {
        type: Number
    },
    duration: {
        type: Number
    }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

const conn1 = require("/models/server.js")
module.exports = conn1.makeConn1.model("Cardio", cardioSchema);

module.exports = Cardio;