import * as Knex from "knex";
import battlegroupModel from '../models/battlegroup.model';

export async function up(knex: Knex): Promise<any> {
    await knex.schema.createTable(battlegroupModel.table, (table) => {
        table.increments('id').primary();
        table.string('name', 1000).notNullable();
        table.integer('capacity');
        table.json('officers');
    });
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable(battlegroupModel.table);
}

