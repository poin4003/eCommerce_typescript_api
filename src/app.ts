import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import { checkOverLoad } from "./helpers/check.connect";
import initMongodb from "./databases/init.mongodb";
import 'dotenv/config';
import router from "./routes";

const app = express()

// Init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// Init db
initMongodb;
// checkOverLoad();

// Init routers
app.use('/', router);

// Handling error

export default app;