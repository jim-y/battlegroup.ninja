import * as Knex from "knex";
import Battlegroup from '../models/battlegroup';

export async function up(knex: Knex): Promise<any> {
    await knex.schema.createTable(Battlegroup.tableName, (table) => {
        table.increments('id').primary();
        table.string('name', 1000).notNullable();
    });
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable(Battlegroup.tableName);
}

