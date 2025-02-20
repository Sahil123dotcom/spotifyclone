module.exports = {
    development: {
      client: 'mysql', // Change this to 'pg' for PostgreSQL or 'sqlite3' for SQLite
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'spotifyclone',
      },
      migrations: {
        directory: './migrations',
      },
      seeds: {
        directory: './seeds',
      },
    },
  };
  