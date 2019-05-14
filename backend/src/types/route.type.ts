import { Router } from 'express';

export interface Route {
  prefix: string;
  router: Router;
}