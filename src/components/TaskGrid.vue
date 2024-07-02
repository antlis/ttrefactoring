<script>
import Task from "@/components/Task.vue"
import NoItemsMessage from "@/components/NoItemsMessage"
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable,
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

<template>
  <Draggable
    class="task-grid"
    id="task-grid"
    v-model="tasks"
    group="people"
    animation=250
    fallbackTolerance=3
    @start="drag = true"
    @end="drag = false">
    <Task
      v-for="(task, index) in tasks"
      :key="task.id"
      :task="task"
      @task-delete="$emit('task-delete', index)"
      @task-toggle="$emit('task-toggle', index)" />
    <div v-if="tasks.length === 0">
      <NoItemsMessage text="No task for today :)" />
    </div>
  </draggable>
</template>

<style scoped lang="scss">
.task-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
