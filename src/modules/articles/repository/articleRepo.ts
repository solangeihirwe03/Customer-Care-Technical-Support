import Articles from "../../../database/models/articles";

const createArticle = async (body: any)=>{
    return await Articles.create(body)
}

const allArticles = async ()=>{
    return await Articles.findAll({
        order: [['createdAt', 'DESC']]
    });
}

export default {
    createArticle,
    allArticles
}
