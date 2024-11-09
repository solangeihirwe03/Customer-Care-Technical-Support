import Articles from "../../../database/models/articles";

const createArticle = async (body: any)=>{
    return await Articles.create(body)
}

export default {
    createArticle
}
