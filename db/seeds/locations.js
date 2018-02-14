exports.seed = (knex, Promise) => {
  return knex('locations').del()
    .then(() => knex('locations').del())
    .then(() => {
      return Promise.all([
        knex('locations').insert({
          name: 'Denver',
          lat: 39.742043,
          lng: -104.991531,
        }, 'id'),
        knex('locations').insert({
          name: 'LA',
          lat: 34.052235,
          lng: -118.243683,
        }, 'id'),
        knex('locations').insert({
          name: 'Boston',
          lat: 42.364506,
          lng: -71.038887,
        }, 'id'),
      ]);
    });
};
