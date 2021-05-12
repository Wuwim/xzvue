import Vue from "vue";
import VueRouter from "vue-router";

import Index from "@/views/Index.vue";
import Details from "../views/Details.vue";
import Products from "../views/Products";
import NotFound from "../views/NotFound"

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Index },
    { path: "/product/detail/:lid", component: Details ,props:true},
    { path:"/products",component:Products},

    { path :"*",component:NotFound},
  ],
});
export default router;
