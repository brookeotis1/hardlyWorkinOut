const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
    name: {
        type: String,
        required: "must enter a resistance exercise type"
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
    duration: {
        type: Number
    }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

const conn2 = require("/models/server.js")
module.exports = conn2.makeConn2.model("Resistance", resistanceSchema);

module.exports = Resistance;




