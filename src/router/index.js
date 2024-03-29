import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    component: AboutView,
  },
  {
    path: "/counter",
    name: "counter",
    component: () => import("../views/CounterView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/UserRegisterView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/UserListView.vue"),
  },
  {
    path: "/update",
    name: "update",
    component: () => import("../views/UserUpdateView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
