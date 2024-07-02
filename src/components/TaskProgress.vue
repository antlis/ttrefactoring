<template>
  <div class="task-progress">
    <div class="task-progress__inner">
      <span class="task-progress__text">
        {{ progress }}%
      </span>
      <div
        class="task-progress__bar"
        :style="{ width: progress + '%' }">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
.task-progress {
  display: flex;
  justify-content: center;
  position: relative;

  &__inner {
    width: 100%;
    max-width: 1000px;
    border: solid 1px white;
    border-radius: 8px;
    text-align: center;
  }

  &__text {
    position: absolute;
    font-size: 16px;
    @media (min-width: $desktop-breakpoint) {
      font-size: 24px;
    }
  }

  &__bar {
    border-radius: 8px;
    background-color: #4caf50;
    height: 20px;
    @media (min-width: $desktop-breakpoint) {
      height: 30px;
    }
  }
}
</style>
