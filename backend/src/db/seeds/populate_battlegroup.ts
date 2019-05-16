import * as Knex from "knex";
import BattlegroupModel from '../models/battlegroup.model';
import { Battlegroup } from "../../types/battlegroup.type";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex(BattlegroupModel.table).del()
        .then(() => {
            // Inserts seed entries
            return knex(BattlegroupModel.table).insert([
                { id: 1, name: "BG1", capacity: 30, officers: JSON.stringify(['John', 'Max']) },
                { id: 2, name: "BG2", capacity: 30, officers: JSON.stringify(['Jay', 'Fizz']) },
                { id: 3, name: "BG3", capacity: 30, officers: JSON.stringify(['Reno', 'Zmax1']) }
            ]);
        });
};
