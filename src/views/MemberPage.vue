<script setup>
import { ref } from "vue";
import Timeline from "primevue/timeline";
import CustomButton from "../components/Button.vue";
import Selectbar from "@/components/SelectBar.vue";

import { storeToRefs } from "pinia";
import { gun_shop } from "@/stores/usePinia.js";
const gunshop = gun_shop();
const { guns, parts, components, equipments } = storeToRefs(gunshop);

const show_products = [guns, parts, components, equipments];
const dropdownState = ref([false, false, false, false]);
const select_bar_name = ["長槍短槍", "內部零件", "外部配件", "人身裝備"];
</script>

<template>
  <div class="container py-2">
    <div>This is member page!!</div>
    <Selectbar
      :titleItem="select_bar_name[0]"
      :selectItems="show_products[0]"
    ></Selectbar>
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
