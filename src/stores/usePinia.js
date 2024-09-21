import { defineStore } from "pinia";
import { shallowRef, triggerRef } from "vue";

export const gun_shop = defineStore("gun_shop", () => {
  const guns = shallowRef([
    { id: 1, name: "突擊步槍" },
    { id: 2, name: "步槍" },
    { id: 3, name: "手槍" },
    { id: 4, name: "狙擊步槍" },
    { id: 5, name: "霰彈槍" },
  ]);

  const parts = shallowRef([
    { id: 1, name: "槍管" },
    { id: 2, name: "板機" },
    { id: 3, name: "槍機" },
    { id: 4, name: "火控" },
  ]);

  const components = shallowRef([
    { id: 1, name: "握把" },
    { id: 2, name: "手把" },
    { id: 3, name: "搶托" },
    { id: 4, name: "瞄準鏡" },
  ]);

  const equipments = shallowRef([
    {
      id: 1,
      name: "背心",
    },
    {
      id: 2,
      name: "手套",
    },
    {
      id: 3,
      name: "腰封",
    },
    {
      id: 4,
      name: "護膝",
    },
  ]);

  const airsoft_datas = shallowRef([
    {
      p_id: "A001",
      p_name: "HK-416",
      p_brand: "KWA",
      p_kind: "gun",
      p_son_kind: "突擊步槍",
      p_price: 5000,
      p_stock: 10,
      p_fornt: "300mm,360mm",
      p_color: ["black", "derest"],
      p_pic:
        "https://www.flytactical.com/wp-content/uploads/2015/12/2-5897X-VI.jpg",
      p_new: "2024/9/10",
    },
    {
      p_id: "A002",
      p_name: "鐵製板機",
      p_brand: "Slong",
      p_kind: "part",
      p_son_kind: "板機",
      p_price: 800,
      p_stock: 50,
      p_fornt: "",
      p_color: "",
      p_pic:
        "https://fs1.shop123.com.tw/200520/upload/product/20052017473pic_outside_347053.jpg",
      p_new: "2024/9/10",
    },
    {
      p_id: "A003",
      p_name: "垂直握把",
      p_brand: "MVG",
      p_kind: "component",
      p_son_kind: "握把",
      p_price: 350,
      p_stock: 20,
      p_fornt: "",
      p_color: ["black", "derest"],
      p_pic:
        "https://img.cloudimg.in/uploads/shops/11494/products/0f/0fb05caa5c19b620ccc935ad5fb6f3c6.jpg",
      p_new: "2024/9/10",
    },
    {
      p_id: "A004",
      p_name: "特勤專用背心",
      p_brand: "其他",
      p_kind: "equipment",
      p_son_kind: "背心",
      p_price: 2200,
      p_stock: 5,
      p_fornt: "",
      p_color: "",
      p_pic:
        "https://lh3.googleusercontent.com/proxy/iud5xxs7uaWTGvLd4wCooZcp2ozdgIl6AwmDtlIeie4wK96yZKRL_TdXYGsk9dQ7Jc1uAoW_VQp0mDjvsDEFhpwSj8LEAUCzK7BVnluM0LQ",
      p_new: "2024/9/10",
    },
    {
      p_id: "A005",
      p_name: "HK-416A5",
      p_brand: "KWA",
      p_kind: "gun",
      p_son_kind: "突擊步槍",
      p_price: 7000,
      p_stock: 10,
      p_fornt: "300mm,360mm",
      p_color: ["black", "derest"],
      p_pic:
        "https://www.flytactical.com/wp-content/uploads/2015/12/2-5897X-VI.jpg",
      p_new: "2024/9/10",
    },
    {
      p_id: "A006",
      p_name: "鐵製板機 V2",
      p_brand: "Slong",
      p_kind: "part",
      p_son_kind: "板機",
      p_price: 850,
      p_stock: 50,
      p_fornt: "",
      p_color: "",
      p_pic:
        "https://fs1.shop123.com.tw/200520/upload/product/20052017473pic_outside_347053.jpg",
      p_new: "2024/9/10",
    },
    {
      p_id: "A007",
      p_name: "垂直握把 V2",
      p_brand: "MVG",
      p_kind: "component",
      p_son_kind: "握把",
      p_price: 400,
      p_stock: 20,
      p_fornt: "",
      p_color: ["black", "derest"],
      p_pic:
        "https://img.cloudimg.in/uploads/shops/11494/products/0f/0fb05caa5c19b620ccc935ad5fb6f3c6.jpg",
      p_new: "2024/9/10",
    },
    {
      p_id: "A008",
      p_name: "特勤專用背心 V2",
      p_brand: "其他",
      p_kind: "equipment",
      p_son_kind: "背心",
      p_price: 2300,
      p_stock: 5,
      p_fornt: "",
      p_color: "",
      p_pic:
        "https://lh3.googleusercontent.com/proxy/iud5xxs7uaWTGvLd4wCooZcp2ozdgIl6AwmDtlIeie4wK96yZKRL_TdXYGsk9dQ7Jc1uAoW_VQp0mDjvsDEFhpwSj8LEAUCzK7BVnluM0LQ",
      p_new: "2024/9/10",
    },
  ]);

  const real_datas = shallowRef([
    {
      p_id: "R001",
      p_name: "AK-47",
      p_brand: "Kalashnikov",
      p_kind: "gun",
      p_son_kind: "突擊步槍",
      p_price: 120000,
      p_stock: 3,
      p_fornt: "",
      p_color: "",
      p_pic:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/AK-47_type_II_noBG.png",
      p_new: "2024/9/10",
    },
    {
      p_id: "R002",
      p_name: "快速反應板機",
      p_brand: "SALVIMAR",
      p_kind: "part",
      p_son_kind: "板機",
      p_price: 9000,
      p_stock: 10,
      p_fornt: "",
      p_color: "",
      p_pic: "https://cf.shopee.tw/file/cdfc5b403ba2ef0320ab780618aa3473",
      p_new: "2024/9/10",
    },
    {
      p_id: "R003",
      p_name: "RA-TECH MOE 戰術握把",
      p_brand: "RA-TECH",
      p_kind: "component",
      p_son_kind: "握把",
      p_price: 2250,
      p_stock: 10,
      p_fornt: "",
      p_color: "black,green",
      p_pic:
        "https://pts-steelshop.com.tw/cdn/shop/products/PT124450313-1.webp?v=1690344275&width=1000",
      p_new: "2024/9/01",
    },
    {
      p_id: "R004",
      p_name: "5.11-TACTEC PLATE CARRIER 戰術背心",
      p_brand: "5.11",
      p_kind: "equipment",
      p_son_kind: "背心",
      p_price: 8500,
      p_stock: 5,
      p_fornt: "",
      p_color: "",
      p_pic:
        "https://shopstore-image.shopstore.tw/7656/product/7656_643a9aea42e06.jpeg",
      p_new: "2024/9/10",
      p_other_pics: [
        "https://shopstore-image.shopstore.tw/7656/product/7656_643a9aea42e06.jpeg",
        "https://storage.googleapis.com/shopstore-upload/7656/product/7656_643a9aebc61be.jpeg",
        "https://storage.googleapis.com/shopstore-upload/7656/product/7656_643a9aed3a232.jpeg",
        "https://storage.googleapis.com/shopstore-upload/7656/product/7656_643a9aee8d5f4.jpeg",
      ],
    },
    {
      p_id: "R005",
      p_name: "AK-47S ",
      p_brand: "Kalashnikov",
      p_kind: "gun",
      p_son_kind: "突擊步槍",
      p_price: 125000,
      p_stock: 3,
      p_fornt: "",
      p_color: "",
      p_pic:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/AK-47_type_II_noBG.png",
      p_new: "2024/9/07",
    },
    {
      p_id: "R006",
      p_name: "快速反應板機 V2",
      p_brand: "SALVIMAR",
      p_kind: "part",
      p_son_kind: "板機",
      p_price: 9050,
      p_stock: 10,
      p_fornt: "",
      p_color: "",
      p_pic: "https://cf.shopee.tw/file/cdfc5b403ba2ef0320ab780618aa3473",
      p_new: "2024/9/10",
    },
    {
      p_id: "R007",
      p_name: "RA-TECH MOE 戰術握把 V2",
      p_brand: "RA-TECH",
      p_kind: "component",
      p_son_kind: "握把",
      p_price: 2300,
      p_stock: 10,
      p_fornt: "",
      p_color: "black,green",
      p_pic:
        "https://pts-steelshop.com.tw/cdn/shop/products/PT124450313-1.webp?v=1690344275&width=1000",
      p_new: "2024/9/08",
    },
    {
      p_id: "R008",
      p_name: "5.11-TACTEC PLATE CARRIER 戰術背心 V2",
      p_brand: "5.11",
      p_kind: "equipment",
      p_son_kind: "背心",
      p_price: 8600,
      p_stock: 5,
      p_fornt: "",
      p_color: "",
      p_pic:
        "https://shopstore-image.shopstore.tw/7656/product/7656_643a9aea42e06.jpeg",
      p_new: "2024/9/01",
      p_other_pics: [
        "https://shopstore-image.shopstore.tw/7656/product/7656_643a9aea42e06.jpeg",
        "https://storage.googleapis.com/shopstore-upload/7656/product/7656_643a9aebc61be.jpeg",
        "https://storage.googleapis.com/shopstore-upload/7656/product/7656_643a9aed3a232.jpeg",
        "https://storage.googleapis.com/shopstore-upload/7656/product/7656_643a9aee8d5f4.jpeg",
      ],
    },
  ]);

  //購物車內的商品
  //all_ShoppingCart_products 內的基礎變數: 型別 => { product: object, quantity: int }
  const all_ShoppingCart_products = shallowRef([]);

  //增加商品至購物車
  const add_products = (product) => {
    set_products(product);
    //all_ShoppingCart_products.value.push(product);
    triggerRef(all_ShoppingCart_products);
  };

  //判斷要加入的商品是否有在購物車內
  //True : 改數量就好
  //False : 加入一筆全新的商品資料
  const set_products = (join_product) => {
    const find_product = all_ShoppingCart_products.value.find(
      (product_in_cart) => product_in_cart.product.p_id === join_product.p_id
    );
    if (find_product === undefined) {
      all_ShoppingCart_products.value.push({
        product: join_product,
        quantity: 1,
      });
    } else {
      const index = all_ShoppingCart_products.value.findIndex(
        (item) => item.product.p_id === join_product.p_id
      );
      //限制增加最大數量 : 10
      if (all_ShoppingCart_products.value[index].quantity < 10) {
        all_ShoppingCart_products.value[index].quantity += 1;
      }
    }
  };

  return {
    all_ShoppingCart_products,
    add_products,
    guns,
    parts,
    components,
    equipments,
    airsoft_datas,
    real_datas,
  };
});
