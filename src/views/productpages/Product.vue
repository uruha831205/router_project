<script setup>
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { gun_shop } from "@/stores/usePinia.js";

const get_route = useRoute();
const gunshop = gun_shop();
const { airsoft_datas, real_datas } = storeToRefs(gunshop);

const choose_data =
  get_route.params.message === "airsoft" ? airsoft_datas : real_datas;
const select_data = choose_data.value.find(
  (product) => product.p_id === get_route.params.product_id
);
</script>

<template>
  <div class="container-xl">
    <h1>This is Product Page</h1>
    <div>{{ get_route.params }}</div>
    <div>{{ get_route.params.message }}</div>
    <div>{{ get_route.params.product_id }}</div>
    <!-- <div>{{ select_data }}</div> -->
    <div>select_data's p_id : {{ select_data.p_id }}</div>
  </div>
</template>

<style></style>
