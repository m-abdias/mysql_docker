const {
  CriptoSchema,
  sequelize
} = require('./database')
const faker = require('faker')
const handler = async event => {
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

exports.handler = handler




// "use strict";

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   database: 'overchain',
//   user: 'root',
//   password: 'OverChain2022!',
//   port: '4306'
// });

// connection.connect();

// module.exports.main = async (event) => {
//   const res = await new Promise((resolve, reject) => {
//     connection.query('SELECT * FROM criptomoedas', function (error, results) {
//       if (error)
//         reject(error);
//       resolve(results)
//     });
//   })
//   connection.end()
//   console.log(res)
//   return {
//     statusCode: 200,
//     body: JSON.stringify(res)
//   };
// };
