var express    = require("express");
 var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host: "localhost",
  user: "root",
  password: "compulife123",
  database: "sharingpoint"
 });
 var app = express();
 app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
 connection.connect(function(err){
 if(!err) {
     console.log("Database is connected ... \n\n");  
 } else {
     console.log("Error connecting database ... \n\n");  
 }
 });


app.get("/contents",function(req,res){
  console.log("result send");
 
  connection.query('SELECT * from  contents', function(err, rows, fields) {
   
 
    if (!err){
      console.log('The solution is: ', rows); 
      res.send(rows);
     
    }
    else
      console.log('Error while performing Query.');
    });
  });
 
 app.listen(3000);