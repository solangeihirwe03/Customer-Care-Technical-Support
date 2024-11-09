import { uploadImage } from "../../../helpers/uploadImage";
import articleRepo from "../repository/articleRepo";
import httpStatus from "http-status";
import { Response, Request } from "express";


const addArticle = async (req: any, res: Response): Promise<void | any>=>{
    try{
        const userId = req.user?.id; 
        let upload: string | undefined = undefined
        if(req.file){
            const uploadResult = await uploadImage(req.file);
            upload = uploadResult.secure_url
        }
        const articleData = {...req.body, upload, userId}

        const article  = await articleRepo.createArticle(articleData);
        
        return res.status(httpStatus.OK).json({
            status: httpStatus.OK,
            data: { article }
        });
    }catch (error: any){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

export default {
    addArticle
}