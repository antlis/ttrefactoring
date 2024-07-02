<template>
  <draggable
    class="task-grid"
    id="task-grid"
    v-model="tasks"
    group="people"
    animation=250
    fallbackTolerance=3
    @start="drag = true"
    @end="drag = false">
    <task
      v-for="(task, i) in tasks"
      :key="task.title"
      :task="task"
      @task-delete="$emit('task-delete', i)"
      @task-toggle="$emit('task-toggle', i)" />
    <div v-if="tasks.length === 0">
      <NoItemsMessage text="No task for today :)" />
    </div>
  </draggable>
</template>

<script>
import Task from "@/components/Task.vue"
import NoItemsMessage from "@/components/NoItemsMessage"
import draggable from 'vuedraggable'

export default {
  components: {
    draggable,
    Task,
    NoItemsMessage,
  },
  computed: {
    tasks: {
      get: function () {
        return this.$store.state.tasks.tasks
      },
      set: function (value) {
        this.$store.commit('updateTasks', value)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.task-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
