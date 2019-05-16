import * as Knex from "knex";
import userModel from "../models/user.model";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex(userModel.table).del()
        .then(() => {
            // Inserts seed entries
            return knex(userModel.table).insert([
                { id: 1, name: "John", email: 'john@malkovich.com', password: 'abc' },
                { id: 2, name: "Mac", email: 'mac@intosh.com', password: 'dfg' },
                { id: 3, name: "Fizz", email: 'fizz@fuzz.com', password: 'hjk' }
            ]);
        });
};
