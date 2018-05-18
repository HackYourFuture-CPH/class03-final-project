// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'db',
      user:     'root',
      password: '1425300'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

 staging: {
    client: 'mysql',
    connection: {
      database: 'db',
      user:     'root',
      password: '1425300'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'hyf',
      user:     'root',
      password: '1425300'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
