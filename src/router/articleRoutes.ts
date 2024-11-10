import { Router } from "express";
import articleController from "../modules/articles/controller/articleController";
import { userAuthorization } from "../middleware/authorization";
import upload from "../helpers/multer"
import { isArticleExist, isArticleOwner } from "../middleware/validation";

const router = Router();

router.post("/create-article",
    userAuthorization, 
    upload.single("imageUrl") , 
    articleController.addArticle
)

router.get("/all-articles", articleController.getAllArticles)
router.get("/article/:id",isArticleExist, articleController.getOneArticle)
router.put("/update-article/:id",isArticleExist, isArticleOwner, upload.single("imageUrl"), articleController.userUpdateArticle)
router.delete("/delete-article/:id",isArticleExist, isArticleOwner, articleController.userDeleteArticle)


export default router