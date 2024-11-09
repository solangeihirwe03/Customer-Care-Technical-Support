import { uploadImage } from "../../../helpers/uploadImage";
import articleRepo from "../repository/articleRepo";
import httpStatus from "http-status";
import { Response, Request } from "express";

const addArticle = async (req: any, res: Response): Promise<void | any>=>{
    try{
        const userId = req.user?.id;
        let article;
        if(req.file){
            const upload = await uploadImage(req.file)
            article = upload.secure_url
        }

        const articleData = {...req.body, article, userId}

        const articleImage  = await articleRepo.createArticle(articleData);
        
        return res.status(httpStatus.OK).json({
            status: httpStatus.OK,
            data: { articleImage }
        });
    }catch (error: any){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

const getAllArticles = async(req: Request, res:Response): Promise<void>=>{
    try{
        const articles = await articleRepo.allArticles();
        res.status(httpStatus.OK).json({
            message: "All articles fetched successfully",
            data: {articles}
        })
    }catch(error: any){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

export default {
    addArticle,
    getAllArticles
}