import axios from 'axios'
const API_URL = 'http://localhost:3000'

export default {
  async sendToApi ({ state, commit }) {
    const body = {
      user: {
        name: state.name,
        goals: state.goals,
        diet: state.diet,
        dob: state.dob
      }
    }

    const config = { headers: { 'content-type': 'application/json' } }
    const response = await axios.post(`${API_URL}/users`, body, config)
    console.log(response)

    const isUserCreated = response.status === 201

    commit('setApiResponse', isUserCreated)

    return isUserCreated
  },
  reset ({ commit }) {
    console.log('resetting survey state')

    commit('setName', '')
    commit('setGoals', undefined)
    commit('setDiet', '')
    commit('setDob', '')
    commit('setApiResponse', false)
  }
}
