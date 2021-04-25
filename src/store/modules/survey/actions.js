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

    try {
      const response = await axios.post(`${API_URL}/users`, body, config)
      console.log(response)

      const isUserCreated = response.status === 201
      commit('setApiResponse', isUserCreated)

      return isUserCreated
    } catch (error) {
      console.log('an error occurred while calling the api')
      console.log(error)
    }
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
