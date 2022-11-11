const faker = require('faker')
const gerarCriptomoeda = () => {
  return {
    name: faker.name.title(),
    symbol: faker.name.jobTitle()
  }
}

const formatSuccesResult = (response) => {
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  }
}

module.exports = {
  gerarCriptomoeda,
  formatSuccesResult,
}