import * as express from 'express';
import * as glob from 'glob';

// @types
import { Route } from './types/route.type';

class App {

  public static ROUTES_FILE_NAME_POSTFIX = 'routes.js';

  public express = express();

  constructor() {
    this._mountRoutes();
  }

  private _mountRoutes(): void {
    const routes = this._getRoutes();

    routes.forEach((route: Route) => {
      this.express.use(route.prefix, route.router);
    });
  }

  private _getRoutes(): Route[] {
    const routes = [];

    try {
        const filenames = glob.sync(`${__dirname}/**/*${App.ROUTES_FILE_NAME_POSTFIX}`);

        filenames.forEach(fname => {
          console.log(fname);
          const module = require(fname).default;
          routes.push(...module);
        });

        return routes;
    } catch (err) {
        console.error(err);
    }
  }
}

export default new App().express;