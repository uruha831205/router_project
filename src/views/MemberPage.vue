<script setup>
import { ref } from "vue";
import Timeline from "primevue/timeline";

const events = ref([
  {
    status: "Ordered",
    date: "15/10/2020 10:30",
    icon: "pi pi-shopping-cart",
    color: "#9C27B0",
  },
  {
    status: "Processing",
    date: "15/10/2020 14:00",
    icon: "pi pi-cog",
    color: "#673AB7",
  },
  {
    status: "Shipped",
    date: "15/10/2020 16:15",
    icon: "pi pi-shopping-cart",
    color: "#FF9800",
  },
  {
    status: "Delivered",
    date: "16/10/2020 10:00",
    icon: "pi pi-check",
    color: "#607D8B",
  },
]);
</script>

<template>
  <div class="container">
    <div>This is member page!!</div>
    <Timeline :value="events" align="right">
      <template #content="slotProps">
        <div v-for="item in slotProps.item">{{ item }}</div>
      </template>
    </Timeline>
  </div>
</template>

<style scoped></style>
