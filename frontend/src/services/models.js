import axios from 'axios'

export const getModel = async (model) => {
  try {
    const response = await axios.get(`http://localhost:3000/models/${model}`);
    return response.data[0]
  } catch (error) {
    throw error
  }
}