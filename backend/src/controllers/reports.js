module.exports = (app) => {
  this.getReports = async (report) => {
    const ModelReports = app.shared.models.reports.reports
    let filter = {}
    if (report) {
      filter.report = report
    }

    const data = await ModelReports.find(filter)
    return data
  }

  this.getDataReport = async (chart) => {
    const ModelReports = app.shared.models.reports.reports
    const ModelData = app.shared.models.data.data
    let filter = {
      chart: chart
    }

    const reportDataChart = await ModelReports.findOne(filter)
    const aggregation = []

    for (let steps of reportDataChart.aggregation) {
      aggregation.push(steps)
    }

    const data = await ModelData.aggregate(aggregation)
    return data
  }

  return this
}