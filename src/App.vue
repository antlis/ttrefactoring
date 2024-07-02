<script>
import TaskProgress from "@/components/TaskProgress.vue"
import TaskForm from "@/components/TaskForm.vue"
import TaskGrid from "@/components/TaskGrid"
import Navbar from "@/components/Navbar"
import { mapMutations } from 'vuex'

export default {
  components: {
    TaskProgress,
    TaskForm,
    TaskGrid,
    Navbar,
  },
  computed: {
    tasks: {
      get() {
        return this.$store.state.tasks.tasks
      },
      set(tasks) {
        this.updateTasks(tasks)
      },
    },
    tasksDoneCount() {
      return this.tasks.filter(task => !task.pending).length
    },
    progress() {
      return this.tasks.length === 0 ?
        0 :
        Math.round(100 / this.tasks.length * this.tasksDoneCount);
    },
  },
  mounted: function () {
    const json = localStorage.getItem('tasks')
    this.tasks = JSON.parse(json) || []
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  },
  methods: {
    ...mapMutations('tasks', {
      updateTasks: 'updateTasks',
      createNewTask: 'createNewTask',
      deleteTask: 'deleteTask',
      toggleTask: 'toggleTask',
    }),
  }
}
</script>

<template>
  <div id="app" class="page">
    <Navbar title="Tasks" />

    <div class="page__progress-container">
      <TaskProgress :progress="progress" />
    </div>

    <div class="page__form-container">
      <TaskForm @create-new-task="createNewTask($event)" />
    </div>

    <div class="page__grid-container">
      <TaskGrid
        @task-delete="deleteTask($event)"
        @task-toggle="toggleTask($event)" />
    </div>
  </div>
</template>

<style lang="scss">
.page {
  &__form-container {
    margin: 20px 30px 0 30px;

    @media (min-width: $desktop-breakpoint) {
      margin: 40px 30px 0 30px;
    }
  }

  &__progress-container {
    margin: 15px 50px 0 50px;
  }

  &__grid-container {
    @media (min-width: $desktop-breakpoint) {
      margin-top: 20px;
      margin: 40px 0 0 0;
    }
  }
}
</style>
