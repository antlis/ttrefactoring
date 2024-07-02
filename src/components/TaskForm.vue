<script>
export default {
  data() {
    return {
      title: "",
    }
  },
  methods: {
    newTask(e) {
      e.preventDefault();
      if (this.title != '') {
        this.$emit('create-new-task', this.title);
        this.title = "";
      }
    }
  }
}
</script>


<template>
  <div class="task-form">
    <form class="task-form__form" @submit="newTask($event)">
      <input
        class="task-form__input"
        type="text"
        placeholder="New task?"
        maxlength="43"
        v-model="title">
      <button
        class="task-form__button"
        @click.prevent="newTask($event)">
        +
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.task-form {
  display: flex;
  justify-content: center;

  &__form {
    display: flex;
    width: 100%;
    max-width: 600px;
    border: solid 1px white;
    border-radius: 8px;
  }

  &__input {
    width: 100%;
    padding: 7px 10px;
    background-color: #FFF2;
    color: #FFF;
    font-size: 32px;
    border: none;
    border-right: 1px solid white;
    outline: none;
  }

  &__button {
    width: 50px;
    margin: none;
    border: none;
    background-color: #1d80d1;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color: white;
    font-size: 32px;
    outline: none;
    &:hover {
      background-color: #3da8ff;
    }
  }
}
</style>
