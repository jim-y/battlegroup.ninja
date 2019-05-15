import * as Knex from "knex";
import Battlegroup from '../models/battlegroup';

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex(Battlegroup.tableName).del()
        .then(() => {
            // Inserts seed entries
            return knex(Battlegroup.tableName).insert([
                { id: 1, name: "BG1" },
                { id: 2, name: "BG2" },
                { id: 3, name: "BG3" }
            ]);
        });
};
