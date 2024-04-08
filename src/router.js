import { createRouter, createWebHistory  } from "vue-router";
import Login from "@/pages/LoginView.vue"
import Signup from "@/pages/SignupView"
import HelloWorld from "./components/HelloWorld.vue";
const routes = [
    {path:'/login', component: Login},
    {path:'/signup', component: Signup},
    {path:'/hello', component: HelloWorld}
]
const router = createRouter({
    history: createWebHistory(),
    routes
  });
export default router;