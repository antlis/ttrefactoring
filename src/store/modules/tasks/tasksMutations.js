import { uuid } from 'vue-uuid';

const mutations = {
  updateTasks(state, tasks) {
    state.tasks = tasks
  },
  createNewTask(state, task) {
    state.tasks.push({
      id: uuid.v4(),
      title: task,
      pending: true,
    })
  },
  deleteTask(state, index) {
    state.tasks.splice(index, 1)
  },
  toggleTask(state, index) {
    state.tasks[index].pending = !state.tasks[index].pending
  },
}

export {
  mutations,
}
