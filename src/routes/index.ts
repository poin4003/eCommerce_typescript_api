import express from "express";
import accessRouter from "./access/index";

const router = express.Router();

router.use('/v1/api', accessRouter);

// router.get('/', (req, res, next) => {
//   return res.status(200).json({
//     message: "Welcome",
//   });
// });

export default router;