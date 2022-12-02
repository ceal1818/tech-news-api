import express, { Application } from 'express';
import swaggerUi from "swagger-ui-express";
import bodyParser from 'body-parser';
import * as dotenv from "dotenv";
import morgan from 'morgan';

import { initialize } from './controllers'

const app: Application = express();

dotenv.config();

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(express.static('public'));

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  );

initialize(app);

app.listen(8080, (): void => {
    console.log("App ready!");
});