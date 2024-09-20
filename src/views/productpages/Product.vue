<script setup>
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { gun_shop } from "@/stores/usePinia.js";

import Rating from "primevue/rating";

const get_route = useRoute();
const gunshop = gun_shop();
const { airsoft_datas, real_datas } = storeToRefs(gunshop);

const choose_data =
  get_route.params.message === "airsoft" ? airsoft_datas : real_datas;
const select_data = choose_data.value.find(
  (product) => product.p_id === get_route.params.product_id
);

function add_product_to_Cart(product) {
  gunshop.add_products(product);
  localStorage.setItem(
    "all_shopping_cart_products",
    JSON.stringify(all_ShoppingCart_products.value)
  );
}
</script>

<template>
  <div class="container-md">
    <!-- <h1>This is Product Page</h1>
    <div>{{ get_route.params }}</div>
    <div>{{ get_route.params.message }}</div>
    <div>{{ get_route.params.product_id }}</div>
    <div>select_data's p_id : {{ select_data.p_id }}</div> -->
    <div class="row">
      <div class="col-12 col-lg-6 p-3">
        <img :src="select_data.p_pic" style="width: 100%" alt="pic" />
      </div>
      <div class="col-12 col-lg-5 offset-lg-1 py-4">
        <h5 class="mb-2 fw-bold">
          {{ select_data.p_son_kind }}, {{ select_data.p_brand }}
        </h5>
        <h1 class="fw-bold mb-4">{{ select_data.p_name }}</h1>
        <h4 class="fw-bold mb-4">NT.{{ select_data.p_price }}</h4>
        <h4 class="fw-bold mb-4">庫存數量 : {{ select_data.p_stock }}</h4>
        <div class="d-flex">
          <Rating
            class="mb-4"
            v-model="select_data.p_stock"
            :active-color="'#ffffff'"
          />
          <span class="ms-2">目前{{ select_data.p_stock }}人評論</span>
        </div>
        <button
          @click="add_product_to_Cart(select_data)"
          class="btn btn-lg btn-secondary w-100 rounded-pill"
        >
          加入購物車
        </button>
        <hr />
        <div>
          <div class="fw-bold my-1">分享此商品</div>
          <div>
            <img
              src="@/assets/icon/IG.png"
              width="40rem"
              class="rounded-pill me-3 mt-2"
              alt=""
            />
            <img
              src="@/assets/icon/thread.png"
              width="40rem"
              class="rounded-pill me-3 mt-2"
              alt=""
            />
            <img
              src="@/assets/icon/FB.avif"
              width="40rem"
              class="rounded-pill mt-2"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
