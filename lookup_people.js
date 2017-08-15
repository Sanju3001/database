function findPerson(client, person, callback) {
   client.query(
    "SELECT * FROM famous_people WHERE last_name = $1;",
    [person],
    (err, result) => {
      if (err) {
        callback(err)
        return
      }
      callback(null, result.rows)
    }
  );
}

module.exports = {
  findPerson: findPerson
}