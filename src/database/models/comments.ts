import { Model, DataTypes, Sequelize } from "sequelize";
import { Icomments } from "../../types";
import Users from "./users";
import Articles from "./articles";
import sequelizeConnection from "../config/db.config";


class Comments extends Model<Icomments> {
    declare id: string;
    declare userId: string;
    declare articleId: string;
    declare comment: string;
    declare createdAt: Date;
    declare updatedAt: Date;

    static associate() {
        Comments.belongsTo(Users, { foreignKey: "userId", as: "users" });
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
            type: new DataTypes.STRING(512),
            allowNull: true
        },
        createdAt:{
            type: new DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        },
        updatedAt:{
            type: new DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
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