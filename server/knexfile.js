// Update with your config settings.
const fs = require('fs');
const mysql = require('mysql');


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
  }

};
