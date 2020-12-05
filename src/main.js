import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);

import routes from "./routes";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

// const shared_data = {
//   username: localStorage.username,
//   login(username) {
//     localStorage.setItem("username", username);
//     this.username = username;
//     console.log("login", this.username);
//   },
//   logout() {
//     console.log("logout");
//     localStorage.removeItem("username");
//     this.username = undefined;
//     if(localStorage.lastSearch){
//       localStorage.removeItem('lastSearch');
//     }
//   },
// };
const shared_data = {
  username: localStorage.username,
  lastWatcheRecipes: [],
  familyRecipes: [],
  // familyRecipesFull: [],
  myRecipes: [],
  myFamilyRecipesFull: [],
  myRecipesFull: [],
  myFavorites: [],
  login(username) {
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
    console.log("session", Vue.$cookies.get("session"));
    console.log(this.lastWatcheRecipes, this.familyRecipes, this.familyRecipesFull, this.myRecipes, this.myRecipesFull, this.myFavorites)
  },
  logout() {
    console.log("logout");
    Vue.$cookies.remove("session");
    localStorage.removeItem("username");
    this.username = undefined;
    if (localStorage.lastSearch) {
      localStorage.removeItem("lastSearch");
    }
    this.lastWatcheRecipes = []
    this.familyRecipes = []
    // familyRecipesFull: [],
    this.myRecipes = []
    this.myFamilyRecipesFull = []
    this.myRecipesFull = []
    this.myFavorites = []
  },
};

router.beforeEach((to, from, next) => {
  // if there was a transition from logged in to session expired or localStorage was deleted

  // if we try to enter auth required pages and we are not authorized
  if (shared_data.username === undefined || !Vue.$cookies.get("session")) {
    if (
      (shared_data.username === undefined && Vue.$cookies.get("session")) ||
      (shared_data.username !== undefined && !Vue.$cookies.get("session"))
    ) {
      shared_data.logout();
    }

    // if the route requires Authorization, (and we know the user is not authorized), we redirect to login page
    if (to.matched.some((route) => route.meta.requiresAuth)) {
      router.push("/login");
    } else next();
  } else next();
});
console.log(shared_data);
// Vue.prototype.$root.store = shared_data;

new Vue({
  router,
  data() {
    return {
      store: shared_data,
    };
  },
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000,
      });
    },
  },
  render: (h) => h(App),
}).$mount("#app");
