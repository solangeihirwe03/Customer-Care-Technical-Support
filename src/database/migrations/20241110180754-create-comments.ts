import { QueryInterface, DataTypes} from "sequelize";

export default  {
  up: async(queryInterface: QueryInterface)=>{
    await queryInterface.createTable("comments", {
      id:{
        type: new DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      userId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      articleId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "articles",
          key: "id"
        }
      },
      comment:{
        type: new DataTypes.STRING(290),
        allowNull: true
      }

    })
  },
  down: async(queryInterface: QueryInterface)=>{
    await queryInterface.dropTable("comments")
  }
}