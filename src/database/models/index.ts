import Articles from "./articles";
import Users from "./users";
import Comments from "./comments";

const db = {
    Articles,
    Users,
    Comments
}

Object.values(db).forEach((model: any) =>{
    if(model.associate){
        model.associate(db)
    }
})

export default db