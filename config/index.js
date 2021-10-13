require("dotenv").config();

const config = {
    port: process.env.PORT || 3001,
    host: process.env.HOST || "http://localhost",
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files',
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME
}

module.exports = config;