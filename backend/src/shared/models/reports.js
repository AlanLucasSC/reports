module.exports = (app) => {
  const { connection, schema } = app.utils.mongodb

  const Reports = new schema({
    aggregation: Array,
    chart: String,
    charts: Array,
    report: String,
    description: String,
    userCreated: String,
    created: Number
  })

  const ModelReports = connection.model('reports', Reports)
  this.reports = ModelReports

  return this
}