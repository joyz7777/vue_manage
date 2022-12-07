import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import User from "@/views/User.vue";
import Main from "@/views/Main.vue";
import Mall from "@/views/Mall.vue";
import PageOne from "@/views/PageOne.vue";
import PageTwo from "@/views/PageTwo.vue";


Vue.use(VueRouter)

// 1. 创建路由组件
// 2. 组件与路由映射
const routes = [

    {
        path: '/',
        component: Main,
        redirect: '/home',
        children: [
            // 子路由
            {path: '/home', component: Home},
            {path: '/user', component: User},
            {path: '/mall', component: Mall},
            {path: '/page1', component: PageOne},
            {path: '/page2', component: PageTwo},
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router;
