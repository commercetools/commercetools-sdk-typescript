<template>
  <DemoProject title="Vue3 Demo" />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  font-weight:600;
  margin-top: 60px auto;
}
</style>
