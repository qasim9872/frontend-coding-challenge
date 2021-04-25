export default {
  setName (state, name) {
    console.log('setting name', name)
    state.name = name
  },
  setGoals (state, goals) {
    console.log('setting goals', goals)
    state.goals = goals
  }
}
