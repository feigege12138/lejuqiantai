import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
   redirect:'/home'
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/cart.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/home/city',
    name: 'city',
    component: () => import('../views/home/city/index.vue')
  },
  {
    path: '/home/brand',
    name: 'brand',
    component: () => import('../views/home/brand/index.vue')
  },
  {
path:'/home/listaction',
name:'listaction',
component:()=>import('../views/home/listaction/index.vue')
  },
  
  {
    path: '/home/search',
    name: 'search',
    component: () => import('../views/home/search/search.vue')
  },
  // 新品首发
  {
    path: '/home/isNew',
    name: 'isNew',
    component: () => import('../views/home/goodsList/isNew.vue')
  },
//  分类
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/category/category.vue')
  },
  // 分类导航栏商品数据
  {
    path: '/category/categoryNav',
    name: 'categoryNav',
    component: () => import('../views/category/categoryNav.vue')
  },
//  我的
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my/my.vue')
  },
   {
    path: '/my/listAction',
    name: 'listAction',
    component: () => import('../views/my/listAction/index.vue')
  },
  {
    path: '/my/idea',
    name: 'idea',
    component: () => import('../views/my/idea/index.vue')
  },
  {
    path: '/my/address',
    name: 'address',
    component: () => import('../views/my/address/index.vue')
  },
  {
    path: '/my/raise',
    name: 'raise',
    component: () => import('../views/my/raise/index.vue')
  },
  {
    path: '/my/compile',
    name: 'compile',
    component: () => import('../views/my/compile/index.vue')
  },



  
  {
    path: '/topic',
    name: 'topic',
    component: () => import('../views/topic/topic.vue')
  },
  //专题精选内容
  {
    path: '/topic/choice',
    name: 'choice',
    component: () => import('../views/topic/choice/index.vue')
  },
  
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
 //商品详情页
 {
  path: '/details',
  name: 'Goods',
  component: () => import('../views/goodsList/index.vue')
},
]

const router = new VueRouter({
  routes
})

export default router
