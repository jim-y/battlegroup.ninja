import * as express from 'express';
import { asyncHandler } from '../utils/express-utils';
import BattlegroupController from './battlegroup.controller';
import database from '../db/database';

const controller = new BattlegroupController(database);
const bind = fn => fn.bind(controller);
const router = express.Router();

router.get('/', asyncHandler(bind(controller.getAll)));
router.get('/:name', asyncHandler(bind(controller.get)));

export default { prefix: '/battlegroup', router };