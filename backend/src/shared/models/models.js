module.exports = (app) => {
  const { connection, schema } = app.utils.mongodb

  const Models = new schema({
    name: String,
    model: Object
  })

  const ModelModels = connection.model('models', Models)
  this.models = ModelModels

  return this
}