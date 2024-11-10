import Articles from "../../../database/models/articles";

const createArticle = async (body: any)=>{
    return await Articles.create(body)
}

const allArticles = async ()=>{
    return await Articles.findAll({
        order: [['createdAt', 'DESC']]
    });
}

const findArticleByAttributes = async (key: string, value:any)=>{
    return await Articles.findOne({where:{[key]: value}})
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

export default {
    createArticle,
    allArticles,
    findArticleByAttributes,
    findArticleAndUpdate,
    findUserIdByArticleId,
    destroyArticleById
}
