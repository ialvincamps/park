import { createConnection } from 'typeorm';
import { resolve } from 'path';
import * as dotenv from 'dotenv';
const appEnvironment = process.env.ENVIRONMENT || 'local';
import routes from './api';
dotenv.config({
  path: resolve(process.cwd(), `.env.${appEnvironment}`)
});

import express from 'express';

const bodyParser = require('body-parser')
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', routes);


(async () => {
  await createConnection();
})();


app.listen(process.env.PORT, ()=> console.log(`App listening on port ${process.env.PORT}!`))
