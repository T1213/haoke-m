import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式
import '@/styles/index.less'
// 引入Vant
import Vant from 'vant'
// 引入rem适配
import 'amfe-flexible'
// 引入字体样式
import '@/assets/font/iconfont.css'
// 引入vant样式(文档时引入css文件，但后面对定制主题配置时，less文件会将其替换掉)
import 'vant/lib/index.less'
// import 'vant/lib/index.css'
// 引入全局组件
import MyNavBar from '@/components/MyNavBar.vue'
// 使用vant
Vue.use(Vant)
Vue.component('MyNavBar', MyNavBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
