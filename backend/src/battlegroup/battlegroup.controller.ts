import * as Knex from 'knex';
import * as Express from 'express';
import battlegroupModel from '../db/models/battlegroup.model';

export default class BattlegroupController {

    constructor(
        private db: Knex
    ) {}

    // ---- CREATE ----

    async create() {

    }

    // ---- READ ----

    async getAll(req: Express.Request, res: Express.Response) {
        const battlegroups = await this.db(battlegroupModel.table);
        
        res.json(battlegroups);
    }

    async get(req: Express.Request, res: Express.Response) {
        const name = req.params.name;
        const battlegroup = await this.db(battlegroupModel.table)
            .whereRaw('LOWER(name) = ?', [name.toLowerCase()]);

        res.json(battlegroup);
    }

    // ---- UPDATE ----
    // ---- DELETE ----

    async delete(req: Express.Request, res: Express.Response) {
        const battlegroupId = req.params.battlegroupId;
        await this.db(battlegroupModel.table).where(battlegroupModel.fields.id, battlegroupId).del();
        res.status(200);
    }
}