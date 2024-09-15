import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import { checkOverLoad } from "./helpers/check.connect";
import { mongoDBInstance } from "./databases/init.mongodb";

const app = express()

// Init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// Init db
// initMongodb;
mongoDBInstance();
checkOverLoad();

// Init routers
app.get('/', (req, res, next) => {
  const strCompress = "Hello world in express"

  return res.status(200).json({
    message: "Welcome",
    metadata: strCompress.repeat(100000)
  });
});

// Handling error

export default app;