

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "compulife123",
  database: "sharingpoint"
});

con.connect(function(err) {
  if (err) throw err;
  
  con.query("insert into contents(id,categories,difficulty,link,title,type,description) values (4,'java','high','www.dd.dk','java','audio','its good')", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  
});

  


