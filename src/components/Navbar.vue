<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
}
</script>

<template>
  <div class="navbar">
    <h1 class="navbar__title">{{ title }}</h1>
  </div>
</template>

<style lang="scss">
.navbar {
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
