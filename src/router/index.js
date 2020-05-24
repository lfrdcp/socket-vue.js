import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import PageError404 from "../components/error/PageError404.vue";
import PageLogin from "../components/login/PageLogin.vue";
import PageRegister from "../components/register/PageRegister.vue";
import PageInicio from "../components/inicio/PageInicio.vue"
import PagePersonal from "../components/settings/PagePersonal.vue"
import PageStoreEmployee from "../components/settings/PageStoreEmployee.vue"

import Welcome from "../components/inicio/Welcome.vue"
import Tasks from "../components/task/Tasks.vue"
import EditTask from "../components/task/EditTask.vue"



import axios from "axios"
const URL = "http://pointsale.boxcode.com.mx/"


const routes = [
  {
    path: "*",
    component: PageError404,
  },
  {
    path: "/login",
    component: PageLogin,
    name: "login",
  },
  {
    path: "/register",
    component: PageRegister,
    name: "register",
  },
  {
    path: "/inicio",
    component: PageInicio,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        component: Welcome,
        children: [
          {
            path: "",
            component: Tasks
          },
          {
            path: "editTask/:id",
            component: EditTask
          }
        ]
      },
      {
        path: "/personal",
        component: PagePersonal,
      },
      {
        path: "/storeEmployee",
        component: PageStoreEmployee,
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("blog_token");
    axios.get(URL + "api/user/vtoken")
      .then(() => {
        next()
      })
      .catch(() => {
        router.replace("/login");
      });

  } else {
    next();
  }
});

export default router;
