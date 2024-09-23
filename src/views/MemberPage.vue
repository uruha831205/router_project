<script setup>
import { ref } from "vue";
import Timeline from "primevue/timeline";
</script>

<template>
  <div class="container py-2">
    <div>This is member page!!</div>
  </div>
  <div>
    <header>Yhis is header</header>
    <nav>Yis is nav!!!</nav>
  </div>
</template>

<style scoped>
@media (prefers-color-scheme: dark) {
  header {
    background-color: yellow;
  }
  nav {
    background-color: orange;
  }
}
</style>
