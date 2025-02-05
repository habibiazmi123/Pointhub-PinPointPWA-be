import { Router } from "express";
import * as controller from "./controller/index.js";
import auth from "../../middleware/auth.js";
const router = Router();
router.get("/", auth, controller.retrieveAllController);
router.post("/", auth, controller.createController);
router.delete("/:id", auth, controller.deleteController);
export default router;
