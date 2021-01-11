
import {createRouter,createMemoryHistory} from 'vue-router'

// const Cart = () => import('../views/cart/Cart')
// const Category = () => import('../views/category/Category')
// const Home = () => import('../views/home/Home')
// const Profile = () => import('../views/profile/Profile')

import Home from "../views/home/Home";
import Cart from "../views/cart/Cart";
import Category from "../views/category/Category";
import Profile from "../views/profile/Profile";

//创建路由对象
const  routes = [
  // {
  //   path:'',
  //   redirect: '/home'
  // },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
]
const  router = new createRouter({
  history:createMemoryHistory(),
  routes
})
//导出
export default  router
