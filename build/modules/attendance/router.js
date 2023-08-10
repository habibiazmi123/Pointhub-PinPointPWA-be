import { Router } from "express";
import * as controller from "./controller/index.js";
import auth from "../../middleware/auth.js";
import uploadImage from "../../utils/upload.js";
const router = Router();
router.get("/", auth, controller.retrieveAllController);
router.post("/", [auth, uploadImage.single("photo")], controller.createController);
router.get("/export", auth, controller.exportController);
export default router;
