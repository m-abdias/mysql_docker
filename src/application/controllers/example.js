const {
  CriptoSchema
} = require('../../infra/databaseFactory')
const { gerarCriptomoeda, formatSuccesResult } = require('../services/example')

const criarCriptomoeda = async (event) => {
  const criptomoeda = gerarCriptomoeda()
  const result = await CriptoSchema.create(criptomoeda)
  if (result) {
    const all = await CriptoSchema.findAll({
      raw: true,
      attributes: ['name', 'symbol', 'id']
    })
    return formatSuccesResult({
      result,
      all
    })
  }
}

module.exports = {
  criarCriptomoeda,
}