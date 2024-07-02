<template>
  <div id="app" class="page">
    <div class="main-navbar">
      <h1 class="main-navbar__title">Tasks</h1>
    </div>

    <div class="page__progress-container">
      <TaskProgress :progress="progress" />
    </div>

    <div class="page__form-container">
      <TaskForm @create-new-task="createNewTask($event)" />
    </div>

    <TaskGrid
      @task-delete="deleteTask($event)"
      @task-toggle="toggleTask($event)" />
  </div>
</template>

<script>
import TaskProgress from "@/components/TaskProgress.vue"
import TaskForm from "@/components/TaskForm.vue"
import TaskGrid from "@/components/TaskGrid"
import { mapMutations } from 'vuex'

export default {
  components: {
    TaskProgress,
    TaskForm,
    TaskGrid
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
    tasksDoneCount() { return this.tasks.filter(arr => !arr.pending).length },
    progress() {
      return this.tasks.length === 0 ? 0 : Math.round(100 / this.tasks.length * this.tasksDoneCount);
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
}

.main-navbar {
  text-align: center;

  &__title {
    margin-top: 10px;
    font-weight: 300;
    font-size: 2rem;
    @media (min-width: $desktop-breakpoint) {
      margin-top: 20px;
      font-size: 3rem;
    }
  }
}
</style>
