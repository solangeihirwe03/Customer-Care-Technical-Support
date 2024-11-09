import { isUserExist, verifyUser } from "../middleware/validation";
import userController from "../modules/user/controller/userController"
import { Router } from "express"

const router = Router();

router.post("/register-user", isUserExist, userController.registerUser );
router.post("/login-user", verifyUser, userController.loginUser)

export default router