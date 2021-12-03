module.exports = (app) => {
  const models = app.middlewares.models

  app.get(`/models/:name`, models.getModels)

  return this
}