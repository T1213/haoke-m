import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const Search = () => import('@/views/Search')
const Info = () => import('@/views/Info')
const Personal = () => import('@/views/Personal')
const Login = () => import('@/views/Login')
const SearchMap = () => import('@/views/SearchMap')
const Register = () => import('@/views/Register')
const Love = () => import('@/views/Love')
const Rent = () => import('@/views/Rent')
const Add = () => import('@/views/Add')
const Detail = () => import('@/views/Detail')
const Map = () => import('@/views/Map')
const City = () => import('@/views/City')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home,
        meta: { title: '首页' }
      },
      {
        path: 'search',
        component: Search,
        meta: { title: '找房' }
      },
      {
        path: 'info',
        component: Info,
        meta: { title: '资讯' }

      },
      {
        path: 'personal',
        component: Personal,
        meta: { title: '我的' }
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/searchmap',
    component: SearchMap
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/love',
    component: Love
  },
  {
    path: '/rent',
    component: Rent,
    children: [
      {
        path: 'add',
        component: Add
      }
    ]
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    name: 'Map',
    path: '/map',
    component: Map
  },
  {
    name: 'City',
    path: '/city',
    component: City
  }
]

const router = new VueRouter({
  routes
})

export default router
