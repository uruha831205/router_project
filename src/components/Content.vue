<script setup>
import { storeToRefs } from "pinia";
import { gun_shop } from "../stores/usePinia.js";
import { ref, shallowRef, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
const get_route = useRoute();

const show_items = shallowRef();
const gunshop = gun_shop();
const { airsoft_datas, real_datas, all_ShoppingCart_products } =
  storeToRefs(gunshop);

function add_product_to_Cart(product) {
  gunshop.add_products(product);
  localStorage.setItem(
    "all_shopping_cart_products",
    JSON.stringify(all_ShoppingCart_products.value)
  );
}

watchEffect(() => {
  show_items.value =
    get_route.params.message == "airsoft"
      ? airsoft_datas.value
      : real_datas.value;
  show_items.value = show_items.value.filter(
    (products) => products.p_kind === get_route.params.kind
  );
});

// watch(get_route.params.message, (a, b) => {
//   console.log("!", a);
//   console.log("!", b);
//   show_items.value =
//     get_route.params.message == "airsoft"
//       ? airsoft_datas.value
//       : real_datas.value;
// });

// watch(get_route.params.kind, (a, b) => {
//   console.log(a);
//   console.log(b);
//   show_items.value = show_items.value.filter(
//     (products) => products.p_kind === get_route.params.kind
//   );
// });
</script>

<template>
  <div class="container">
    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-xs-1">
      <div v-for="item in show_items" class="p-3">
        <div class="product-banner">
          <router-link
            :to="`/${get_route.params.message}/${item.p_id}`"
            class="product-pic"
          >
            <img
              class="pic w-100"
              style="height: 250px; object-fit: contain"
              :src="item.p_pic"
              alt="pic"
            />
          </router-link>

          <div class="product-info p-3">
            <div
              class="product-name fs-5 fw-bold d-flex justify-content-between align-items-center"
            >
              <div>{{ item.p_name }}</div>
              <!-- <div class="fs-6 fw-bold">庫存量: {{ item.p_stock }}</div> -->
            </div>
            <div class="d-flex justify-content-between align-items-center mt-2">
              <div class="product-price fw-bold fs-6">${{ item.p_price }}</div>
              <button
                class="btn btn-sm btn-secondary"
                @click="add_product_to_Cart(item)"
              >
                <!--購物車按鈕在上面-->
                <i class="bi bi-cart3 pe-2"></i>購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-banner {
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px 1px,
    rgba(0, 0, 0, 0.06) 0px -1px 4px -1px;
  border-radius: 6px;
  padding: 5px;
}
</style>
