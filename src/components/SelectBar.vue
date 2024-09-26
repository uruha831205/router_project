<script setup>
import { ref, watch } from "vue";

const checkedItems = ref([]);
const selectAll = ref(false);
const dropdownState = ref(false);

const Props = defineProps(["titleItem", "selectItems"]);

const toggleDropdown = () => {
  dropdownState.value = !dropdownState.value;
};

watch(selectAll, () => {
  if (selectAll.value) {
    checkedItems.value = Props.selectItems.value.map((gun) => gun.name);
    dropdownState.value = selectAll.value;
  } else if (
    !(
      checkedItems.value.length > 0 &&
      checkedItems.value.length < Props.selectItems.value.length
    )
  ) {
    checkedItems.value = [];
  }
});

watch(checkedItems, () => {
  if (checkedItems.value.length == Props.selectItems.value.length) {
    selectAll.value = true;
  } else if (checkedItems.value.length == 0) {
    dropdownState.value = false;
  } else {
    selectAll.value = false;
  }
});
</script>
<template>
  <div class="select-name" @click="toggleDropdown()">
    <div>
      <input
        class="me-1"
        type="checkbox"
        :id="Props.titleItem"
        v-model="selectAll"
      />
      <label class="text-secondary" :for="Props.titleItem">{{
        Props.titleItem
      }}</label>
    </div>
    <div>
      <i v-if="dropdownState" class="bi bi-caret-up-fill"></i>
      <i v-if="!dropdownState" class="bi bi-caret-down-fill"></i>
    </div>
  </div>
  <ul class="select-items" :class="{ show: dropdownState }">
    <li v-for="item in Props.selectItems.value">
      <input
        class="me-1"
        type="checkbox"
        :id="item.name"
        :value="item.name"
        v-model="checkedItems"
      />
      <label class="text-secondary" :for="item.name">{{ item.name }}</label>
    </li>
  </ul>
</template>
<style>
.select-name {
  padding: 0 1rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  user-select: none;
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
</style>
