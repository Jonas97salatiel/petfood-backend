// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'petfood',
      user: "postgres",
      password: "1234"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
  },

    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'petfood',
      user: "postgres",
      password: "1234"
    }
  }
};
