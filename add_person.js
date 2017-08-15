/*

pg.select('first_name', 'last_name').from('famous_people')
.where('id', '>', 0)
.andWhere('id', '<', 200)
.limit(10)
.offset(x)
.asCallback(function(err, rows) {
  if (err) return console.error(err);
  pg.select('id').from('famous_people')
    .whereIn('famous_people', _.pluck(rows, 'last_name'))
    .asCallback(function(err, rows) {
      if (err) return console.error(err);
      console.log(rows);
    });
});

module.exports = {

}


lookup_people.findPerson(client, process.argv[2], (err, result) => {
    console.error(err)
    console.log(result)
  })

*/