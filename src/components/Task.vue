<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    }
  },
  computed: {
    taskClass() {
      return this.task.pending ? 'task--is-pending' : 'task--is-done'
    },
  }
}
</script>

<template>
  <div
    class="task"
    :class="taskClass"
    @click="$emit('task-toggle')">
    <div class="task__header">
      <div
        class="task__delete-button"
        @click.stop="$emit('task-delete')">
        x
      </div>
    </div>
    <div class="task__body">
      <span class="task__text">
        {{ task.title }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.task {
  $self: &;
  
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 150px;
  padding: 10px;
  cursor: pointer;
  user-select: none;
  border-radius: 8px;
  margin-top: 10px;

  @media (min-width: $desktop-breakpoint) {
    margin: 10px;
  }

  &__header {
    display: flex;
    justify-content: flex-end;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 2;
  }

  &__delete-button {
    font-size: 13px;
    text-align: center;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
  }

  &__text {
    max-width: 308px;
    font-size: 32px;
    font-weight: 100;
    line-height: 33px;
    overflow-wrap: break-word;
  }

  &--is-pending {
    background-color: $color-danger-dark;
    border-left: 12px solid $color-danger-brighter;
    &:hover {
      background-color: $color-danger-red;
      border-left: 12px solid $color-danger-pale;
    }

    #{ $self }__delete-button {
      background-color: $color-danger-darkest;
    }
  }

  &--is-done {
    background-color: $color-success;
    border-left: 12px solid $color-success-dark;
    &:hover {
      background-color: $color-success-brightest;
      border-left: 12px solid $color-success-brith;
    }

    #{ $self }__delete-button {
      background-color: $color-success-dark;
    }

    #{ $self }__text {
      text-decoration: line-through;
    }
  }
}
</style>
