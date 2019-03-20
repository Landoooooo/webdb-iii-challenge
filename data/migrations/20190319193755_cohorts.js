// Cohorts Table

exports.up = function(knex, Promise) {
    // Define cohorts table
  return knex.schema.createTable('cohorts', tbl => {
      tbl.increments();
      tbl.string('name', 128)
        .notNullable()
        .unique();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts');
};
