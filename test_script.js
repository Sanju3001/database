const pg = require("pg");
const settings = require("./settings"); // settings.json
const lookup_people = require("./lookup_people")

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err, connection) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  lookup_people.findPerson(client, process.argv[2], (err, result) => {
    console.error(err)
    console.log(result)
  })


  setTimeout(() => {client.end()}, 2000) // We need to wait queries to be done
                                     // before closing the connection.
                                     // I *promise* there's a better way to
                                     // do this! ;)
})