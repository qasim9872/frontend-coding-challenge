export default {
  setName (state, name) {
    console.log('setting name', name)
    state.name = name
  },
  setGoals (state, goals) {
    console.log('setting goals', goals)
    state.goals = goals
  },
  setDiet (state, diet) {
    console.log('setting diet', diet)
    state.diet = diet
  },
  setDob (state, dob) {
    console.log('setting dob', dob)
    state.dob = dob
  },
  setApiResponse (state, created) {
    console.log('setting created', created)
    state.created = created
  }
}
