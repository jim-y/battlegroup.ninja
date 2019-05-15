import * as knexConfig from './knexfile';
import * as Knex from 'knex';

const env = process.env.NODE_ENV || 'development';
const knex: Knex = require('knex')(knexConfig[env]);

export default knex;