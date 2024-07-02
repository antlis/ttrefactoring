const mutations = {
  updateTasks(state, tasks) {
    state.tasks = tasks
  },
  createNewTask(state, task) {
    state.tasks.push({
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
