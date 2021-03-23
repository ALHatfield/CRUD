var mysql      = require('mysql');


const connection = mysql.createConnection({
  // host     : MYSQL_DB_HOST,
  // port     : MYSQL_DB_PORT,
  // user     : MYSQL_DB_USER,
  // password : MYSQL_DB_PASS,
  // database :  MYSQL_DB_NAME

  host     : "localhost",
  port     : '/Applications/MAMP/tmp/mysql/mysql.sock',
  user     : "root",
  password : "password",
  database : "test_db"
});

connection.connect(function(err) {
  err
    ? console.error(`\n...\n...\nerror connecting MySQL: ${err.stack} \n${err.message}`)
    : console.error(`...\n\nMySQL is ${connection.state} on thread id ${connection.threadId}` +"\n...\n")
});

module.exports = connection;