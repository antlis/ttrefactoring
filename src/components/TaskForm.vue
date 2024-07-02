<script>
export default {
  data() {
    return {
      title: "",
    }
  },
  methods: {
    createNewTask() {
      if (this.title) {
        this.$emit('create-new-task', this.title);
        this.title = "";
      }
    }
  }
}
</script>


<template>
  <div class="task-form">
    <form
      class="task-form__form"
      @submit.prevent="createNewTask">
      <input
        class="task-form__input"
        type="text"
        placeholder="New task?"
        maxlength="43"
        v-model="title">
      <button
        class="task-form__button"
        @click.prevent="createNewTask">
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
    border: solid 1px $color-white;
    border-radius: 8px;
  }

  &__input {
    width: 100%;
    padding: 7px 10px;
    background-color: $color-opaque-white;
    color: $color-white;
    font-size: 32px;
    border: none;
    border-right: 1px solid $color-white;
    outline: none;
  }

  &__button {
    width: 50px;
    margin: none;
    border: none;
    background-color: $color-sky;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color: $color-white;
    font-size: 32px;
    outline: none;
    &:hover {
      background-color: $color-sky-bright;
    }
  }
}
</style>
