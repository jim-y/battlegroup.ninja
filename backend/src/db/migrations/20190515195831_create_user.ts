import * as Knex from 'knex';
import userModel from '../models/user.model';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(userModel.table, (table) => {
    table.increments('id').primary();
    table.string('name', 256);
    table.string('email', 256).notNullable();
    table.string('password', 1000);
  });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(userModel.table);
}

