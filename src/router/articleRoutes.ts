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
router.get("/user-get-article/:articleId",
    isArticleExist, 
    articleController.getOneArticle
)

router.put("/update-article/:articleId",
    userAuthorization,
    isArticleOwner, 
    upload.single("imageUrl"), 
    articleController.userUpdateArticle
)
router.delete("/delete-article/:articleId",
    userAuthorization,
    isArticleOwner, 
    articleController.userDeleteArticle
)

router.post("/user-comment-article/:articleId/comments",
    userAuthorization, 
    isArticleExist, 
    articleController.userCreateComment 
)



export default router