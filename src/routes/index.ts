import express from "express";
import accessRouter from "./access/index";
import { apiKey, permission } from "../auth/checkAuth";

const router = express.Router();

// Check apiKey
router.use(apiKey);
// Check permission
router.use(permission('0000'));

router.use('/v1/api', accessRouter);

export default router;