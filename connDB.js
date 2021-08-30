var { Client } = require('pg');

const pg = new Client({
  host: "127.0.0.1",    
  user: "firmadyne", //"user0@firmware.re",
  password: "firmadyne", //"user0user0",
  database: "firmware",
  port: 5432, //5050,
});

pg.connect();

console.log("conn success !!!");

pg.query('SELECT * FROM brand', (err, res) => {
  if (!err) console.log(res);
  else console.log(err);
  pg.end();
});

// pg.query('SELECT * FROM image', (err, res) => {
//   if (!err) console.log(res);
//   else console.log(err);
//   pg.end();
// });
console.log("------------> END <--------------");