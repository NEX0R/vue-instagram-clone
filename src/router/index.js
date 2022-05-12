import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";
import Direct from "../views/direct/index.vue";
import Explore from "../views/explore/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile"),
      children:[
        {
          path: '',
          name: "ProfilePost",
          component:   ()=>   import(/* webpackChunkName: "profilepost" */ "../views/profile/post"),

        },
        {
          path: 'igtv',
          name: "ProfileIGTV",
          component:   ()=>   import(/* webpackChunkName: "profileigtv" */ "../views/profile/igtv"),

        },
        {
          path: 'save',
          name: "ProfileSave",
          component:   ()=>   import(/* webpackChunkName: "profilesave" */ "../views/profile/save"),

        },
        {
          path: 'tag',
          name: "ProfileTag",
          component:   ()=>   import(/* webpackChunkName: "profiletag" */ "../views/profile/tag"),

        }
      ]
  },
  {
    path: "/direct",
    name: "Direct",
    component:    ()=>   import(/* webpackChunkName: "direct" */ "../views/direct"),
  },
  {
    path: "/explore",
    name: "Explore",
    component:    ()=>   import(/* webpackChunkName: "explore" */ "../views/explore"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
