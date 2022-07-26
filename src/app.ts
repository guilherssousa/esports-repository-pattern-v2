import express from "express";
import { logger } from "./middlewares/logger";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(logger);
app.use(router);

export { app };
