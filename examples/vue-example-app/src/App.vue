<template>
  <DemoProject title="Vue3 Example App" />
</template>

<script>
import DemoProject from './components/DemoProject.vue'

export default {
  name: 'App',
  components: {
    DemoProject
  },
}
</script>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
