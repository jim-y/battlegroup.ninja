import * as Knex from 'knex';
import playerModel from '../models/player.model';

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex(playerModel.table).del()
        .then(() => {
            // Inserts seed entries
            return knex(playerModel.table).insert([
                { id: 1, name: "Player1", properties: JSON.stringify({ prestige: 8200 }), ref: 'some_ref'},
                { id: 2, name: "Player2", properties: JSON.stringify({ prestige: 5110 }), ref: 'some_ref'},
                { id: 3, name: "Player3", properties: JSON.stringify({ prestige: 10200 }), ref: 'some_ref'}
            ]);
        });
};
