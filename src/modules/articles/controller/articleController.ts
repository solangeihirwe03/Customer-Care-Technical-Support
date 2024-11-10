import uploadImage from "../../../helpers/uploadImage";
import articleRepo from "../repository/articleRepo";
import httpStatus from "http-status";
import { Response, Request } from "express";
import { ExtendRequest } from "src/types";

const addArticle = async (req: any, res: Response): Promise<any>=>{
    try{
        const userId = req.user?.id;
        let imageUrl;
        if(req.file){
            const upload = await uploadImage(req.file)
            imageUrl = upload.secure_url
        }

        const articleImage  = await articleRepo.createArticle({...req.body, imageUrl, userId});
        
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

const getAllArticles = async(req: Request, res:Response): Promise<any>=>{
    try{
        const articles = await articleRepo.allArticles();
        return res.status(httpStatus.OK).json({
            message: "All articles fetched successfully",
            data: {articles}
        })
    }catch(error: any){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

const getOneArticle = async(req: ExtendRequest, res:Response): Promise<any>=>{
    try{
        const article = req.article
        return res.status(httpStatus.OK).json({
            status: httpStatus.OK,
            message: "article fetched successfully!",
            data: {article}
        })
    }catch(error: any){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

const userUpdateArticle = async (req: ExtendRequest, res:Response): Promise <any>=>{
    try{
        const article = req.article
        const updatedArticleData = {
            ...article,
            ...req.body
        }
        if (req.file) {
            const upload = await uploadImage(req.file);
            updatedArticleData.image = upload.secure_url;
        }
        const updateArticle = await articleRepo.findArticleAndUpdate("id",req.params.id, updatedArticleData)

        return res.status(httpStatus.OK).json({
            status:httpStatus.OK,
            message: "Artice updated successfullty!",
            data: {
                updateArticle
            }
        })
    }catch(error: any){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

const userDeleteArticle = async(req:ExtendRequest, res:Response): Promise<any>=>{
    try{
        const deleteArticle = await articleRepo.destroyArticleById(req.params.id)
        res.status(httpStatus.OK).json({
            status: httpStatus.OK,
            message: "Article deleted successfully"
        })
    }catch(error: any){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

export default {
    addArticle,
    getAllArticles,
    getOneArticle,
    userUpdateArticle,
    userDeleteArticle
}