<script setup>
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import { gun_shop } from "@/stores/usePinia.js";
const gunshop = gun_shop();
const { guns, parts, components, equipments } = storeToRefs(gunshop);

const show_products = reactive([guns, parts, components, equipments]);
const dropdownState = ref([false, false, false, false]);
const select_bar_name = ["長槍短槍", "內部零件", "外部配件", "人身裝備"];

const toggleDropdown = (dropdownKey) => {
  dropdownState.value[dropdownKey] = !dropdownState.value[dropdownKey];
};
</script>

<template>
  <!-- 搜尋引擎 -->
  <div class="search-bar">
    <input type="text" class="search p-2" placeholder=": HK416  戰術手套" />
  </div>
  <!-- 下拉式選單 -->
  <div
    class="select-bar"
    v-for="(show_product, index) in show_products"
    :key="index"
  >
    <div class="select-name" @click="toggleDropdown(index)">
      {{ select_bar_name[index] }}
      <i v-if="dropdownState[index]" class="bi bi-caret-up-fill"></i>
      <i v-if="!dropdownState[index]" class="bi bi-caret-down-fill"></i>
    </div>
    <ul :class="['select-items', { show: dropdownState[index] }]">
      <li v-for="item in show_product.value" :key="item.id">
        <input type="checkbox" :id="item.name" />
        <label :for="item.name" style="margin-left: 5px">
          {{ item.name }}
        </label>
      </li>
    </ul>
    <hr />
  </div>

  <button class="search-btn">搜尋</button>
</template>

<style scoped>
hr {
  margin-top: 10px;
}

.select-name {
  padding: 0 15px 5px;
  cursor: pointer;
  font-size: 1.2rem;
}

.select-items {
  max-height: 0;
  transition: linear 0.2s;
  transform-origin: top;
  overflow: hidden;
  list-style-type: none;
  margin: 0 5px;
}

.select-items.show {
  display: block;
  max-height: 200px;
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
  right: 0;
  border: none;
  border-radius: 20px;
  margin-bottom: 15px;
  background-color: rgb(85, 85, 85);
  font-size: 1.2rem;
  font-weight: bold;
  color: aliceblue;
}
</style>
