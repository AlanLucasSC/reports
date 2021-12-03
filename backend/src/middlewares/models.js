module.exports = (app) => {

  this.getModels = async (req, res) => {
    const models = app.controllers.models
    const name = req.params.name

    try {
      let data = await models.getModel(name)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(error.status || 500).send(error.data)
    }
  }

  return this
}