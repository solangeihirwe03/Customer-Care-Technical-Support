import dotenv from "dotenv";

dotenv.config();

const commonDatabaseConfig = {
    dialect: "postgres",
}

const sequelizeConfig = {
    development: {
        ...commonDatabaseConfig,
        url: process.env.DATABASE_URL_DEV
    },
    production: {
        ...commonDatabaseConfig,
        url: process.env.DATABASE_URL_PRO,
        dialectOptions: {
            ssl:{
                require: true,
                rejectUnauthorized: false
            }
        }
    }
}

module.exports = sequelizeConfig;