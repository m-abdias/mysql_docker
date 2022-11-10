const {
  CriptoSchema,
  sequelize
} = require('./database')
const faker = require('faker')
const main = async event => {
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

  await CriptoSchema.sync()
  const result = await CriptoSchema.create({
      name: faker.name.title(),
      symbol: faker.name.jobTitle()
  })

  const all = await CriptoSchema.findAll({
      raw: true,
      attributes: ['name', 'symbol', 'id']
  })

  return {
      body: JSON.stringify({
          result,
          all
      })
  }
}

exports.main = main



