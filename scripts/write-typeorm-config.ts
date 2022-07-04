import { resolve } from 'path';
import * as fs from 'fs';
const appEnvironment = process.env.ENVIRONMENT || '';
const envFile = appEnvironment ? `.env.${appEnvironment}` : '.env';

import * as dotenv from 'dotenv';
dotenv.config({
  path: resolve(process.cwd(), envFile)
});

import dbConnection from '../src/database/typeorm-config';


fs.writeFileSync('ormconfig.json', JSON.stringify(dbConnection(), null, 2));
