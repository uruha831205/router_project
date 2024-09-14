<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, triggerRef } from "vue";

import { storeToRefs } from "pinia";
import { gun_shop } from "../stores/usePinia.js";

//取得 pinia資料
const gunshop = gun_shop();
const { all_ShoppingCart_products } = storeToRefs(gunshop);

const get_route = useRoute();
const get_router = useRouter();

const route_name = get_route.params.message;
const isOpen = ref(false);

if (!["airsoft", "real", "member"].includes(route_name)) {
  get_router.replace("/404");
}

function toogle_ShoppingCart() {
  isOpen.value = !isOpen.value;
}

function read_ShoppingCart() {
  all_ShoppingCart_products.value =
    JSON.parse(localStorage.getItem("all_shopping_cart_products")) || [];
}

function clear_ShoppingCart() {
  all_ShoppingCart_products.value = [];
  save_all_ShoppingCart_products_in_localStorage();
}

function reduce_quantuty(product) {
  if (product.quantity != 1) {
    product.quantity -= 1;
  }
  triggerRef(all_ShoppingCart_products);
  save_all_ShoppingCart_products_in_localStorage();
}

function add_quantuty(product) {
  if (product.quantity != 999) {
    product.quantity += 1;
  }
  triggerRef(all_ShoppingCart_products);
  save_all_ShoppingCart_products_in_localStorage();
}

function cancel_product(Index) {
  const index = all_ShoppingCart_products.value.findIndex(
    (item) => item.product.p_id == Index
  );
  all_ShoppingCart_products.value.splice(index, 1);
  triggerRef(all_ShoppingCart_products);
  save_all_ShoppingCart_products_in_localStorage();
}

function save_all_ShoppingCart_products_in_localStorage() {
  localStorage.setItem(
    "all_shopping_cart_products",
    JSON.stringify(all_ShoppingCart_products.value)
  );
}

onMounted(() => {
  read_ShoppingCart();
});
</script>

<template>
  <div class="layout">
    <header class="container p-0">
      <router-link :to="`/${route_name}`" class="logo text-black"
        >Logo</router-link
      >
      <div class="member">
        <router-link :to="`/${route_name}/member`" class="member text-black"
          >會員中心</router-link
        >
      </div>
    </header>

    <nav class="bg-gradient">
      <div class="container navbar h-100 w-100">
        <div class="text-white">
          <router-link
            :to="`/${route_name}/gun`"
            class="choose me-4 text-black fw-bold fs-4"
            replace
            >長槍短槍</router-link
          >
          <router-link
            :to="`/${route_name}/part`"
            class="choose me-4 text-black fw-bold fs-4"
            replace
            >內部零件</router-link
          >
          <router-link
            :to="`/${route_name}/component`"
            class="choose me-4 text-black fw-bold fs-4"
            replace
            >外部配件</router-link
          >
          <router-link
            :to="`/${route_name}/equipment`"
            class="choose text-black fw-bold fs-4"
            replace
            >人身裝備</router-link
          >
        </div>
        <div class="search-bar h-75 w-25">
          <input type="text" class="search p-2" placeholder="HK416  戰術手套" />
          <button type="submit" class="search-btn px-2 bg-gradient">
            搜尋
          </button>
        </div>
      </div>
    </nav>

    <div class="run-horse-bar bg-gradient">
      <div class="run-horse-words">新品即將進貨!!</div>
    </div>

    <div>
      <router-view></router-view>
    </div>

    <div class="router-view-area"></div>

    <footer class="d-flex justify-content-center">
      <main class="container row row-cols-lg-3 row-cols-xs-1">
        <div class="mb-5" v-for="x in 3">
          門市營業時間
          <hr class="mt-1 mb-2" />
          周二 ~ 周日 : AM. 11:00 ~ PM.9:00 <br />
          周一公休<br />
          線上客服<br />
          周一 ~ 週日 : AM. 12:00 ~ PM.9:00
        </div>
      </main>
    </footer>
    <div class="shopping-cart" @click="toogle_ShoppingCart">購物車</div>
    <div class="shopping-cart-list" :class="[{ show: isOpen }]">
      <div class="p-2" style="position: relative">
        <div v-if="all_ShoppingCart_products.length == 0">目前是空的</div>
        <div
          v-for="product in all_ShoppingCart_products"
          class="row mb-2 align-items-center m-0"
        >
          <img :src="product.product.p_pic" alt="" class="col-3" />
          <div class="col-3 text-center">{{ product.product.p_name }}</div>
          <div class="col-2">
            ${{ product.product.p_price * product.quantity }}
          </div>
          <div class="col-3 text-center d-flex justify-content-around">
            <button
              class="bg-white shopping-cart-btn"
              @click="reduce_quantuty(product)"
              :disabled="product.quantity === 1"
            >
              -
            </button>
            <span class="">{{ product.quantity }}</span>
            <button
              class="bg-white shopping-cart-btn"
              @click="add_quantuty(product)"
              :disabled="product.quantity === 10"
            >
              +
            </button>
          </div>
          <div class="col-1">
            <img
              src="../assets/cancel.svg"
              class="shopping-cart-cancel-btn"
              alt="cancel-btn"
              @click="cancel_product(product.product.p_id)"
            />
          </div>
        </div>
        <button
          @click="clear_ShoppingCart"
          style="position: fixed; top: 0; right: 0"
        >
          Clear
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  font-size: 3rem;
  font-weight: bold;
  text-decoration: none;
}

.search-bar {
  width: 20%;
  display: flex;
  position: relative;
  border-radius: 5px;
  border: 1px solid black;
  overflow: hidden;
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
  height: 100%;
  inset: unset;
  position: absolute;
  right: 0;
  border: none;
  border-left: 2px solid black;
}

.member {
  font-size: 1.5em;
  text-decoration: none;
  font-style: unset;
  font-weight: bold;
}

.choose {
  position: relative;
  font-size: 2em;
  text-decoration: none;
  font-style: unset;
}

.choose::after {
  position: absolute;
  left: 0;
  bottom: -4px;
  content: "";
  width: 100%;
  height: 2px;
  background-color: rgb(31, 31, 31);
  border-radius: 5px;
  transform: scaleY(0);
  transition: 0.3s;
}

.choose:hover::after {
  transform: scaleY(1);
}

.run-horse-bar {
  height: 4vh;
  background-color: rgb(15, 15, 15); /*rgb(49, 49, 49)*/
  color: aliceblue;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: 0 0 2px black;
}

.run-horse-words {
  position: absolute;
  animation: slide linear 25s infinite;
}

@keyframes slide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(calc(100vw));
  }
}

@media screen and (max-width: 1024px) {
  .run-horse-words {
    animation-duration: 15s;
  }
}

@media screen and (max-width: 576px) {
  .run-horse-words {
    animation-duration: 10s;
  }
}

.shopping-cart {
  width: 80px;
  aspect-ratio: 1/1;
  border-radius: 50px;
  background-color: rgb(49, 49, 49);
  color: aliceblue;
  position: fixed;
  right: 3%;
  bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px black;
  user-select: none;
  cursor: pointer;
  z-index: 2;
}

.shopping-cart-list {
  width: 550px;
  height: 300px;
  position: fixed;
  right: 3%;
  bottom: 15%;
  background-color: rgb(150, 150, 150);
  border-radius: 10px;
  transform: scale(0);
  transform-origin: bottom right;
  transition: 0.5s;
  color: black;
  overflow-y: scroll;
  z-index: 2;
}

.shopping-cart-list.show {
  transform: scale(1);
}

.shopping-cart-btn {
  user-select: none;
  border-radius: 5px;
  width: 20%;
  cursor: pointer;
}

.shopping-cart-cancel-btn {
  width: 80%;
  user-select: none;
  cursor: pointer;
}

header {
  height: 10vh;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav {
  height: 7vh;
  background-color: rgb(170, 170, 170); /*rgb(170, 170, 170)*/
}

footer {
  padding: 5rem;
  background-color: rgb(170, 170, 170);
}
</style>
