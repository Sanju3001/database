
//const add_person = require("./add_person")

//var knex = require('knex')({});
var pg = require('knex')({
  client: 'pg',
  connection: {
    "user": "development",
    "password": "development",
    "database": "vagrant",
    "hostname": "localhost",
    "port": 5432,
    "ssl": true
  }

});

//knex('table').insert({famous_people: 'b'}).returning('*').toString();
// "insert into "table" ("a") values ('b')"

pg('famous_people').insert({first_name: process.argv[2], last_name: process.argv[3], birthdate: process.argv[4]}).returning('*').then((results) => {

  console.log(results);
  //pg.connection.close();
  //process.exit(0);
/*
pg.select('first_name', 'last_name').from('famous_people')
.where('id', '>', 0)
.andWhere('id', '<', 200)
.limit(10)
.offset(x)
.asCallback(function(err, rows) {
  if (err) return console.error(err);
  knex.select('id').from('famous_people')
    .whereIn('famous_people', _.pluck(rows, 'last_name'))
    .asCallback(function(err, rows) {
      if (err) return console.error(err);
      console.log(rows);
    });
});
*/

}).catch((err) => {
  if (err) {
    console.error("There is an error", err)
  }
}).finally(function () {
      return pg.destroy(); //works

});

// "insert into "table" ("a") values ('b') returning *"

/*
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  }
});


var pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public'
});


pg.connect((err, connection) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  add_person.findPerson(pg, process.argv[2], (err, result) => {
    console.error(err)
    console.log(result)
  })


  setTimeout(() => {pg.end()}, 2000) // We need to wait queries to be done
                                     // before closing the connection.
                                     // I *promise* there's a better way to
                                     // do this! ;)
})
*/