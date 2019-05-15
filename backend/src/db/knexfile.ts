import {
  DB_HOST,
  DB_USER,
  DB_PASSWORD
} from '../config/env';

const development = {
  client: 'pg',
  connection: {
    host : DB_HOST,
    user : DB_USER,
    password : DB_PASSWORD,
    database : 'bgninja'
  },
  pool: {
      min: 2,
      max: 10
  },
  migrations: {
      tableName: 'knex_migrations'
  }
};

export {
  development
}
