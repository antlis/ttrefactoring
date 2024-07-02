import { state } from './tasksState'
import { mutations } from './tasksMutations'
import { getters } from './tasksGetters.js'

const tasks = {
  namespaced: true,
  state,
  mutations,
  getters,
}

export {
  tasks,
}
