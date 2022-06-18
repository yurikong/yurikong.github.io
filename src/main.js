import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// normalize.css
import "normalize.css"

// global styles
import "@/styles/index.scss"

createApp(App).use(store).use(router).mount("#app")
