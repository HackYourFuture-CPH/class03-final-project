// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
   
      user: "root",
      password: "compulife123",
      database: "sharingpoint"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'contents'
    }
  },

 staging: {
    client: 'mysql',
    connection: {
   
      user: "root",
      password: "compulife123",
      database: "sharingpoint"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'contents'
    }
  },

  production: {
    client: 'mysql',
    connection: {
     
  user: "root",
  password: "compulife123",
  database: "sharingpoint"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'contents'
    }
  }

};
