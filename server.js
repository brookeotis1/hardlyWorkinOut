const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
  

//log multiple exercises - name, type, wt, sets, reps, duration 
//cardio/resistance

//add exercises to most recent plan
//add new exercises to new plan
//view combined wt of mult exercises from past 7 workouts on stats pg
//view total duration of each workout from past 7 workouts on stats pg