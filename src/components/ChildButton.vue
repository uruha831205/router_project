<script setup>
import { ref } from "vue";

const show = ref(0);
</script>
<template>
  <div class="show_text">{{ show }}</div>
  <button @click="show++">Add 1</button>
</template>
<style></style>
