import * as express from 'express';
import { asyncHandler } from '../utils/express-utils';

const router = express.Router();

router.get('/', asyncHandler(async (req, res, next) => {
  res.json({
    battlegroups: [{
      name: 'BG1',
      members: [{
        name: 'John Doe'
      }]
    }]
  });
}));

export default { prefix: '/battlegroup', router };