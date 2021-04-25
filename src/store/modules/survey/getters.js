export default {
  name (state) {
    console.log('getting name', state)
    return state.name
  },
  goals (state) {
    console.log('getting goals', state)
    return state.goals
  }
}
