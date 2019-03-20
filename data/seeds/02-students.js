
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Bob', cohort_id: 1},
        {name: 'Rob', cohort_id: 2},
        {name: 'Scott', cohort_id: 3}
      ]);
    });
};
