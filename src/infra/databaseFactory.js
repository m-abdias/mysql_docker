const Sequelize = require('sequelize')
const connection = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
}

const sequelize = new Sequelize(
    connection.database,
    connection.user,
    connection.password,
    {
        host: connection.host,
        port: connection.port,
        dialect: 'mysql',
        // case sensitive
        quoteIdentifiers: false,
        // deprecation warning
        operatorsAliases: false
    }
)

const CriptoSchema = sequelize.define('criptomoedas',
    {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            required: true,
        },
        symbol: {
            type: Sequelize.STRING,
            required: true,
        }
    },
    {
        tableName: 'TB_CRIPTOMOEDAS',
        freezeTableName: false, 
        timestamps: false
    }

)

module.exports = {
    CriptoSchema,
    sequelize
}