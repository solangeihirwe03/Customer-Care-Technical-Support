import { Model, DataTypes } from "sequelize";
import { Icomments } from "../../types";
import Users from "./users";
import Articles from "./articles";
import sequelizeConnection from "../config/db.config";


class Comments extends Model<Icomments> {
    declare id: string;
    declare userId: string;
    declare articleId: string;
    declare comment: string;

    static associate() {
        Comments.belongsTo(Users, { foreignKey: "userId", as: "user" });
        Comments.belongsTo(Articles, { foreignKey: "articleId", as: "articles" })
    }
}

Comments.init(
    {
        id:{
            type: new DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        userId:{
            type: DataTypes.UUID,
            allowNull: false,
            references:{
                model: "users",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
        },
        articleId:{
            type: DataTypes.UUID,
            allowNull: false,
            references:{
                model: "articles",
                key: "id"
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        },
        comment: {
            type: new DataTypes.STRING(290),
            allowNull: true
        }
    },
    {
        sequelize: sequelizeConnection,
        tableName: "comments",
        modelName: "Comments",
        timestamps: true
    }
)

export default Comments