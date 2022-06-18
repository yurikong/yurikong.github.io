import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "@/views/Home"),
  },
  {
    path: "/helloworld",
    name: "HelloWorld",
    component: () => import(/* webpackChunkName: "HelloWorld" */ "@/views/HelloWorld"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
