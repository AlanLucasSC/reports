module.exports = (app) => {
  this.getModel = async (name) => {
    const ModelModels = app.shared.models.models.models
    let filter = {
      name: name
    }

    const data = await ModelModels.find(filter)
    return data
  }

  return this
}