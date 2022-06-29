<template>
  <div>
    <!-- //路由 -->
    <router-view class="main"></router-view>
    <!-- 底部 -->
    <van-tabbar route fixed>
      <van-tabbar-item replace to="/home" class="iconfont icon-shouye">
        <span>首页</span></van-tabbar-item
      >
      <van-tabbar-item
        replace
        to="/search"
        class="iconfont icon-icon_bangwozhaofang"
        ><span>找房</span></van-tabbar-item
      >
      <van-tabbar-item replace to="/info" class="iconfont icon-zixun"
        ><span>资讯</span></van-tabbar-item
      >
      <van-tabbar-item replace to="/personal" class="iconfont icon-wode"
        ><span>我的</span></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      active: 0

    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.main {
  padding-bottom: 50px;
}
van-tabbar {
  height: 50px;
  width: 100%;
}

.icon-zixun,
.icon-shouye,
.icon-icon_bangwozhaofang,
.icon-wode {
  font-size: 18px;
}
.van-tabbar-item span {
  font-size: 14px;
}
</style>
