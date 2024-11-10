import Comments from "../../../database/models/comments";
import Articles from "../../../database/models/articles";
import Users from "../../../database/models/users";

const createArticle = async (body: any)=>{
    return await Articles.create(body)
}

const allArticles = async ()=>{
    return await Articles.findAll({
        order: [['createdAt', 'DESC']],
    });
}

const findArticleByAttributes = async (key: string, value:any)=>{
    return await Articles.findOne({
        where:{[key]: value}})
}

const findArticleWithComments = async (articleId:string)=>{
    return await Articles.findOne(
        {where: {id: articleId},
        include: [
            {
                model: Comments,
                as: "comments",
                include: [
                    {
                        model: Users,
                        as: "user",
                        attributes: ["username"]
                    }
                ]
           }
        ]
    },
    )
}

const findArticleAndUpdate = async (
    key: string,
    value: any,
    articleData: any
)=>{
    return  await Articles.update(
        {...articleData},
        {where: {[key]: value}, returning: true}
    );
}

const findUserIdByArticleId = async (articleId: string)=>{
    return await Articles.findAll({
        where: { id: articleId },
        attributes: ['userId'],
    })
}

const destroyArticleById = async (articleId:string)=>{
    return await Articles.destroy({where : {id : articleId}})
}

const createComments = async (body:any)=>{
    return await Comments.create(body)
}

export default {
    createArticle,
    allArticles,
    findArticleByAttributes,
    findArticleAndUpdate,
    findUserIdByArticleId,
    destroyArticleById,
    createComments,
    findArticleWithComments
}
