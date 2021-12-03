const mongoose = require('mongoose')
const config = require('config')

const {url, tenant} = config.get('virtus-pae-db')

const conn = mongoose.createConnection(
  url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

exports.connection = conn
exports.schema = mongoose.Schema
exports.collection = 'tcc_gustavo'