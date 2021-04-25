import axios from 'axios'
const API_URL = 'http://localhost:3000'

export default {
  async sendToApi ({ state }, data) {
    const body = {
      user: {
        name: state.name,
        goals: state.goals,
        diet: state.diet,
        dob: state.dob
      }
    }

    const config = { headers: { 'content-type': 'application/json' } }
    return axios.post(`${API_URL}/users`, body, config)
  }
}
