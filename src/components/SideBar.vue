<script setup>
import { storeToRefs } from "pinia";
import { gun_shop } from "@/stores/usePinia.js";
import Selectbar from "@/components/SelectBar.vue";
const gunshop = gun_shop();
const { guns, parts, components, equipments } = storeToRefs(gunshop);

const show_products = [guns, parts, components, equipments];
const select_bar_name = ["長槍短槍", "內部零件", "外部配件", "人身裝備"];
</script>

<template>
  <!-- 搜尋引擎 -->
  <div class="search-bar">
    <input type="text" class="search p-2" placeholder=": HK416  戰術手套" />
  </div>
  <!-- 下拉式選單 -->
  <div
    class="select-bar"
    v-for="(_, index) in show_products.length"
    :key="index"
  >
    <Selectbar
      :titleItem="select_bar_name[index]"
      :selectItems="show_products[index]"
    ></Selectbar>
    <hr />
  </div>

  <button class="search-btn py-1">搜尋</button>
</template>

<style scoped>
hr {
  margin-top: 10px;
}

.search-bar {
  width: 100%;
  position: relative;
  border-radius: 5px;
  border: 1px solid black;
  overflow: hidden;
  margin: 1rem 0px;
}

.search {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  transition: 0.2s;
}

.search:focus {
  box-shadow: inset 0 0 3px black;
}

.search-btn {
  width: 100%;
  border: none;
  border-radius: 20px;
  margin-bottom: 1rem;
  background-color: rgb(85, 85, 85);
  font-size: 1.2rem;
  font-weight: bold;
  color: aliceblue;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 6px 1px;
}
</style>
