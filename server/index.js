const express       = require('express');
const path          = require('path');
const port          = 3000;
const connection    = require('./db/connection.js');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));


// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

app.get('/api', (req, res) => {

  console.log(connection.state);
  
  let QUERY = 'SELECT * FROM inventory';
  console.log(connection.state);


  connection.query(QUERY, function (err, results) {
    console.log(connection.state);
    if (err) console.log(err);

    // Handle results from query
    console.log(`query string:\n${QUERY}\n`);
    console.log(`\n\nquery results: \n${results}\n\n\n`);

    // Response from server
    res.setHeader('Content-Type', 'application/json');
    res.json(results);

    // When done with the connection, release it.
    // db.release();  // ??? not working
    // db.end()
  });

  

});




app.listen(port, () => {
  console.log(`\n\nApp listening at http://localhost:${port}`);
});



