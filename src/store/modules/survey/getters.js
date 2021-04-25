export default {
  name (state) {
    console.log('getting name', state)
    return state.name
  },
  goals (state) {
    console.log('getting goals', state)
    return state.goals
  },
  diet (state) {
    console.log('getting diet', state)
    return state.diet
  },
  dob (state) {
    console.log('getting dob', state)
    return state.dob
  }
}
