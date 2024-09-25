<script setup>
// import { ref, watch, computed, watchEffect } from "vue";
// import { useRoute } from "vue-router";
import psidebar from "@/components/SideBar.vue";
import pcontent from "@/components/Content.vue";
//const get_route = useRoute();
</script>

<template>
  <div class="custom-layout container-md d-flex p-0">
    <div class="sidebar">
      <psidebar></psidebar>
    </div>
    <div class="section">
      <pcontent></pcontent>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 20%;
}

.section {
  width: 80%;
}

@media screen and (max-width: 780px) {
  .custom-layout {
    flex-direction: column;
  }

  .sidebar,
  .section {
    width: 100%;
    padding-inline: 1rem;
  }
}
</style>
