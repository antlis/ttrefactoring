<template>
  <span class="no-tasks-message">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  },
}
</script>

<style scoped lang="scss">
.no-tasks-message {
  font-size: 26px;
  color: #FFF2;
  margin-top: 100px;

  @media (min-width: $desktop-breakpoint) {
    font-size: 32px;
  }
}
</style>
