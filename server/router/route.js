import { Router } from "express";
const router = Router();
import * as controller from "../controllers/appController.js";
import Auth from "../middleware/auth.js";

router.route("/register").post(controller.register);
router
  .route("/authenticate")
  .post(controller.verifyUser, (req, res) => res.end());
router.route("/login").post(controller.verifyUser, controller.login);

router.route("/user/:username").get(controller.getUser);

router.route("/updateuser").put(Auth, controller.updateUser);
router
  .route("/resetPassword")
  .put(controller.verifyUser, controller.resetPassword);

export default router;
