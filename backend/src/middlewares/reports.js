module.exports = (app) => {

  this.getReports = async (req, res) => {
    const reports = app.controllers.reports
    const report = req.query.report

    try {
      let data = await reports.getReports(report)
      res.status(200).send(data)
    } catch (error) {
      console.log(error)
      res.status(error.status || 500).send(error.data)
    }
  }

  this.getDataReport = async (req, res) => {
    const reports = app.controllers.reports
    const chart = req.params.chart

    try {
      let data = await reports.getDataReport(chart)
      res.status(200).send(data)
    } catch (error) {
      res.status(error.status || 500).send(error.data)
    }
  }

  return this
}