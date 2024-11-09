import { Router } from "express";
import articleController from "../modules/articles/controller/articleController";
import { userAuthorization } from "../middleware/authorization";
import upload from "../helpers/multer"

const router = Router();

router.post("/create-article",userAuthorization, upload.single("imageUrl") , articleController.addArticle)

export default router