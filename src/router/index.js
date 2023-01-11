import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

const routes = [
//登陆界面,后期做前置守卫
{
path:"/",
component:()=>import('@/page/login/login-index.vue')
},
//注册的界面
{
    path:'/register',
    component:()=>import('@/page/login/register/register-index.vue')
},
//主页
{
   path:"/home",
   component:()=>import('@/page/home/index-home.vue')
}

]

const router = new VueRouter({
    routes
})

export default router