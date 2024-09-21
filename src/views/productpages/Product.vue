<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { gun_shop } from "@/stores/usePinia.js";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";

import Rating from "primevue/rating";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";

const thumbsSwiper = ref(null);
const currentThumbIndex = ref(0);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
const onSlideChange = (swiper) => {
  currentThumbIndex.value = swiper.activeIndex; // 獲取當前活動的縮略圖索引
};

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
  <div class="container-md my-2">
    <div class="row">
      <div class="col-12 col-lg-7 p-0 m-0">
        <swiper
          :modules="[Thumbs]"
          :thumbs="{ swiper: thumbsSwiper }"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="(product, index) in select_data.p_other_pics"
            :key="index"
            class="d-flex justify-content-center"
          >
            <img
              :src="product"
              style="object-fit: cover; cursor: pointer; width: 70%"
              alt="Product image "
            />
          </swiper-slide>
        </swiper>

        <swiper
          class="mt-2"
          @swiper="setThumbsSwiper"
          :slides-per-view="5"
          :space-between="10"
          :watch-slides-progress="true"
        >
          <swiper-slide
            v-for="(product, index) in select_data.p_other_pics"
            :key="index"
          >
            <img
              :src="product"
              style="object-fit: cover; cursor: pointer; border-radius: 15px"
              class="w-100 thumbs-swiper-slide"
              :class="{ 'active-thumb': currentThumbIndex === index }"
              alt="Product image"
            />
          </swiper-slide>
        </swiper>
      </div>

      <div class="col-12 col-lg-5 py-4">
        <h5 class="mb-2 fw-bold" style="color: rgba(90, 90, 90)">
          {{ select_data.p_son_kind }}, {{ select_data.p_brand }}
        </h5>
        <h1 class="fw-bold mb-4">{{ select_data.p_name }}</h1>
        <h4 class="fw-bold mb-4">NT. {{ select_data.p_price }}</h4>
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
          class="btn btn-lg btn-secondary w-100 rounded-pill fw-bold"
        >
          <i class="bi bi-cart3 pe-2"></i>
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

      <div class="col-12">
        <Tabs value="0">
          <TabList>
            <Tab value="0" style="font-size: 20px">商品詳圖</Tab>
            <Tab value="1" style="font-size: 20px">商品規格</Tab>
            <Tab value="2" style="font-size: 20px">購物須知</Tab>
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="d-flex flex-column align-items-center">
                <img
                  v-for="pic in select_data.p_other_pics"
                  class="mb-2"
                  :src="pic"
                  alt="pic"
                  width="70%"
                />
              </div>
            </TabPanel>
            <TabPanel value="1">
              <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
              </p>
            </TabPanel>
            <TabPanel value="2">
              <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<style>
.active-thumb {
  opacity: 1; /* 活動縮略圖不透明 */
}

.thumbs-swiper-slide {
  transition: 0.3s;
}

.thumbs-swiper-slide:not(.active-thumb) {
  opacity: 0.5; /* 非活動縮略圖半透明 */
}

.thumbs-swiper-slide:not(.active-thumb):hover {
  transition: 0.2s;
  opacity: 0.8;
}
</style>
