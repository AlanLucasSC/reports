module.exports = (app) => {
  const reports = app.middlewares.reports

  app.get(`/reports`, reports.getReports)
  app.get(`/reports/:chart/data`, reports.getDataReport)

  return this
}