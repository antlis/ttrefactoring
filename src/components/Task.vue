<template>
  <div
    class="task"
    :class="taskClass"
    @click="$emit('task-toggle', task)">
    <div class="task__header">
      <div
        class="task__delete-button"
        @click.stop="$emit('task-delete', task)">
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
    width: 350px;
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
    background-color: #d1382e;
    border-left: 12px solid #b8271c;
    &:hover {
      background-color: #fa4538;
      border-left: 12px solid #d83d32;
    }

    #{ $self }__delete-button {
      background-color: #b73229;
    }
  }

  &--is-done {
    background-color: #4caf50;
    border-left: 12px solid #0a8f08;
    &:hover {
      background-color: #60d463;
      border-left: 12px solid #0fc40c;
    }

    #{ $self }__delete-button {
      background-color: #0a8f08;
    }

    #{ $self }__text {
      text-decoration: line-through;
    }
  }
}
</style>
