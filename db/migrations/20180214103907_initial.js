exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('locations', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('lat');
      table.string('lng');
      table.timestamps(true, true);
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('locations'),
  ]);
};
