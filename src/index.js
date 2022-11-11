const {
    sequelize
} = require('./infra/databaseFactory')
const controllers = require('./application/controllers')
const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully')
    } catch (error) {
        console.log('Unable to connect to the database', error.stack)
        return {
            statusCode: 500,
            body: 'ERRR'
        }
    }
}

connect()

exports.controllers = controllers



