const conn1Name = "cardioDB";
const conn2Name = "resistanceDB";

exports.makeConn1 = mongoose.createConnection("mongodb://localhost:27017/${conn1Name}", {useNewURLParser: true }, function(err){
    if(!err){
console.log("Database Server connection created at: ${conn1Name}");
    } else {
        console.log("error starting server ${err}");
    }
});

exports.makeConn2 = mongoos.createConnection("mongodb://localhost:27017/${conn2Name}", {useNewURLParser: true }, function(err){
   if(!err) {
       console.log("Database server connection created at: ${conn2Name}");
   } else {
       console.log("error starting server ${err}");
   }
});