import * as Knex from "knex";
import playerModel from "../models/player.model";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(playerModel.table, (table) => {
    table.increments('id').primary();
    table.string('name', 256).notNullable();
    table.string('ref', 1000);
    table.json('properties');
  })
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(playerModel.table);
}

