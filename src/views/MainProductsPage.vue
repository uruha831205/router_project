<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, triggerRef } from "vue";

import ShoppingCartList from "@/components/ShoppingCartList.vue";

const get_route = useRoute();
const get_router = useRouter();
const route_name = get_route.params.message;
const toogle = ref(false);
const isOpen = ref(false);
const gotTopubttonisShow = ref(false);

function clickToogle() {
  toogle.value = !toogle.value;
}

function toogle_ShoppingCart() {
  isOpen.value = !isOpen.value;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function handleScroll() {
  gotTopubttonisShow.value = window.scrollY >= 800;
}

if (!["airsoft", "real", "member"].includes(route_name)) {
  get_router.replace("/404");
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="layout">
    <header class="container-md">
      <router-link :to="`/${route_name}`" class="logo text-black"
        >Logo</router-link
      >

      <router-link :to="`/${route_name}/member`" class="member text-black"
        >會員中心</router-link
      >
    </header>

    <nav class="bg-gradient sticky-top">
      <div class="container-md navbar h-100 w-100 custom-navbar">
        <div class="link-bar" :class="{ show: toogle }">
          <router-link
            :to="`/${route_name}/gun`"
            @click="clickToogle"
            class="choose text-black fw-bold fs-3"
            replace
            >長槍短槍</router-link
          >
          <router-link
            :to="`/${route_name}/part`"
            @click="clickToogle"
            class="choose text-black fw-bold fs-3"
            replace
            >內部零件</router-link
          >
          <router-link
            :to="`/${route_name}/component`"
            @click="clickToogle"
            class="choose text-black fw-bold fs-3"
            replace
            >外部配件</router-link
          >
          <router-link
            :to="`/${route_name}/equipment`"
            @click="clickToogle"
            class="choose text-black fw-bold fs-3"
            replace
            >人身裝備</router-link
          >
        </div>

        <div class="search-bar d-flex">
          <div class="toggle-area me-1 display-3" @click="clickToogle()">
            <i class="bi bi-list"></i>
          </div>
          <div class="search-area w-100">
            <input
              type="text"
              class="search-text p-2"
              placeholder="HK416  戰術手套"
            />
            <button type="submit" class="search-btn px-2 bg-gradient">
              搜尋
            </button>
          </div>
        </div>
      </div>
      <div class="run-horse-bar bg-gradient">
        <div class="run-horse-words">新品即將進貨!!</div>
      </div>
    </nav>

    <div class="router-view-area">
      <router-view></router-view>
    </div>

    <footer class="d-flex justify-content-center">
      <main class="container-xl row row-cols-lg-3 row-cols-xs-1">
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

    <div class="mainPageToolButton">
      <div
        class="goTopButton"
        :class="{ show: gotTopubttonisShow }"
        @click="scrollToTop"
      >
        <i class="bi bi-arrow-bar-up"></i>
      </div>

      <div class="shopping-cart" @click="toogle_ShoppingCart">購物車</div>
    </div>

    <div class="shopping-cart-list" :class="[{ show: isOpen }]">
      <ShoppingCartList></ShoppingCartList>
    </div>

    <div class="shoppingCart-mobile" :class="[{ show: isOpen }]">
      <div
        class="shoppingCart-mobile-overlay"
        :class="[{ show: isOpen }]"
        @click="toogle_ShoppingCart"
      ></div>
      <ShoppingCartList :setBackColorGray="true"></ShoppingCartList>
    </div>

    <div class="member_shoppingCart_btn-mobile text-center fw-bold fs-5">
      <router-link
        :to="`/${route_name}/member`"
        class="w-100 p-2 border-2 border-end border-dark text-dark text-decoration-none bg-gradient"
        >會員中心</router-link
      >

      <div class="w-100 p-2 bg-gradient" @click="toogle_ShoppingCart">
        購物車
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  position: relative;
}

.shoppingCart-mobile {
  display: none;
  position: fixed;
  top: 0;
  width: 80%;
  height: 100%;
  transition: 0.3s;
  left: -100%;
  z-index: 1040;
}

.shoppingCart-mobile.show {
  left: 0;
}

.shoppingCart-mobile-overlay {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.6;
  z-index: 0;
  transition: 0.2s;
}

.shoppingCart-mobile-overlay.show {
  right: 0%;
}

.member_shoppingCart_btn-mobile {
  display: none;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: gray;
  z-index: 9;
}

.logo {
  font-size: 3rem;
  font-weight: bold;
  text-decoration: none;
}

.member {
  font-size: 2.5rem;
  text-decoration: none;
  font-weight: bold;
}

.toggle-area {
  display: none;
}

.search-bar {
  width: 25%;
}

.search-area {
  display: flex;
  position: relative;
  border-radius: 5px;
  border: 1px solid black;
  overflow: hidden;
}

.search-text {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  transition: 0.2s;
}

.search-text:focus {
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

.choose {
  position: relative;
  text-decoration: none;
  font-style: unset;
  margin-right: 1rem;
}

.choose:nth-last-child(1) {
  margin-right: 0;
}

.choose::after {
  position: absolute;
  left: 0;
  bottom: -1px;
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

.mainPageToolButton {
  position: fixed;
  right: 3%;
  bottom: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.goTopButton {
  width: 50px;
  aspect-ratio: 1/1;
  background-color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 6px black;
  user-select: none;
  cursor: pointer;
  z-index: 10;
  border-radius: 50px;
  transition: 0.5s;
  visibility: hidden;
  opacity: 0;
  margin-bottom: 1rem;
}

.goTopButton.show {
  visibility: visible;
  opacity: 1;
}

.shopping-cart {
  width: 80px;
  aspect-ratio: 1/1;
  border-radius: 50px;
  background-color: rgb(49, 49, 49);
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 6px black;
  user-select: none;
  cursor: pointer;
  z-index: 10;
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
  overflow: hidden;
  z-index: 10;
}

.shopping-cart-list.show {
  transform: scale(1);
}

header {
  height: 10vh;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav {
  background-color: rgb(170, 170, 170); /*rgb(170, 170, 170)*/
}

footer {
  padding: 5rem;
  background-color: rgb(170, 170, 170);
}

@media screen and (max-width: 1000px) {
  .custom-navbar {
    display: flex;
    flex-direction: column;
    padding-inline: 0.5rem;
  }

  .link-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .search-bar {
    width: 100%;
  }

  header {
    padding: 5px;
  }
}

@media screen and (max-width: 600px) {
  .shoppingCart-mobile {
    display: block;
  }

  .member,
  .shopping-cart,
  .shopping-cart-list {
    display: none;
  }

  .member_shoppingCart_btn-mobile {
    display: flex;
  }
}

@media screen and (max-width: 500px) {
  .toggle-area {
    display: block;
  }

  .link-bar {
    flex-direction: column;
    align-items: center;
    transition: 0.5s;
    transform-origin: top;
    max-height: 0;
    overflow: hidden;
  }

  .link-bar.show {
    max-height: 150px;
    margin-top: 0.5rem;
  }

  .choose {
    margin-right: 0;
  }

  .custom-navbar {
    flex-direction: column-reverse;
    padding-bottom: 0;
  }
}
</style>
