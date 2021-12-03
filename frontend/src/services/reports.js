import axios from 'axios'

const barChartData = (list) => {
  const labels = []
  const value = []
  let total = 0

  for (const data of list) {
    if (data._id) {
      labels.push(data._id)
    }

    if (data.quantidades) {
      value.push(data.quantidades)
      total += data.quantidades
    }
  }

  return {
    labels,
    data: value,
    total
  }
}

const charts = {
  'bar-chart': barChartData
}

export const getReport = async (report) => {
  try {
    const response = await axios.get('http://localhost:3000/reports', {
      params: {
        report
      }
    });
    return response.data[0]
  } catch (error) {
    throw error
  }
}

export const getData = async (chart, model) => {
  try {
    const response = await axios.get(`http://localhost:3000/reports/${chart}/data`);
    const data = charts[model](response.data)
    return data
  } catch (error) {
    throw error
  }
}