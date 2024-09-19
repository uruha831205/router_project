<script setup>
import { useRoute } from "vue-router";
import { watch, ref } from "vue";
import psidebar from "@/components/SideBar.vue";
import pcontent from "@/components/Content.vue";
const get_route = useRoute();

// const route_item = ref(get_route.params);

// watch(
//   () => get_route.params,
//   (newParams) => {
//     route_item.value = newParams;
//   }
// );
</script>
<template>
  <div class="container-md d-flex p-0">
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
</style>
