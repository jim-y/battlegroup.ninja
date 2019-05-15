import * as Knex from "knex";
import * as Express from 'express';
import BattlegroupModel from '../db/models/battlegroup';

export default class BattlegroupController {

    constructor(
        private db: Knex
    ) {}

    async getAll(req: Express.Request, res: Express.Response) {
        const battlegroups = await this.db(BattlegroupModel.tableName);
        
        res.json(battlegroups);
    }

    async get(req: Express.Request, res: Express.Response) {
        const name: string = req.params.name;
        const battlegroup = await this.db(BattlegroupModel.tableName)
            .whereRaw('LOWER(name) = ?', [name.toLowerCase()]);

        res.json(battlegroup);
    }
}