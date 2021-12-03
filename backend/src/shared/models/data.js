module.exports = (app) => {
  const { connection, schema } = app.utils.mongodb

  const Data = new schema({
    name: String,
    data: Object,
    inserted: Number
  })

  const ModelData = connection.model('data', Data)
  this.data = ModelData

  return this
}