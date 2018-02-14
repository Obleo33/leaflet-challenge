module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/leaflet_challenge',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds',
    },
    useNullAsDefault: true
  }
};
