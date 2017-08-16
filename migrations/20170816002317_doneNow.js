
exports.up = function(knex, Promise) {
   return Promise.all([
    knex.schema.createTable("milestonesX", function(table) {
      table.increments("id");
      table.string("description");
      table.date("date_achieved");
      table.foreign("famous_person_id").references("famous_people.id");
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("milestonesX")
  ])
};