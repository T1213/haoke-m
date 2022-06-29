<template>
  <div class="personal">
    <!-- 背景图 -->
    <img :src="BgImgSrc" class="bg" />
    <div class="per-main">
      <!-- 顶部 -->
      <PostLogin v-if="user"></PostLogin>
      <PreLogin v-else></PreLogin>
      <!-- 中间部分 -->
      <van-grid clickable :column-num="3">
        <van-grid-item text="我的收藏" icon="star-o" :to="love">
        </van-grid-item>
        <van-grid-item text="我的出租" icon="home-o" :to="rent">
        </van-grid-item>
        <van-grid-item text="看房记录" icon="clock-o" :to="record">
        </van-grid-item>
        <van-grid-item text="成为房主" icon="notes-o" :to="host">
        </van-grid-item>
        <van-grid-item text="个人资料" icon="user-o" :to="per"> </van-grid-item>
        <van-grid-item text="联系我们" icon="service-o" :to="call">
        </van-grid-item>
      </van-grid>
      <!-- 底部图片 -->
      <van-image
        src="http://liufusong.top:8080/img/profile/join.png"
        class="buttom-img"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PreLogin from '@/components/PreLogin.vue'
import PostLogin from '@/components/PostLogin.vue'
export default {
  created () {
    console.log(this.user)
  },
  data () {
    return {
      BgImgSrc: this.user !== null
        ? 'http://liufusong.top:8080/img/avatar.png'
        : 'http://liufusong.top:8080/img/profile/bg.png',
      love: this.user !== null ? '/love' : '/login',
      rent: this.user !== null ? '/rent' : '/login',
      record: this.user !== null ? '/record' : '/login',
      host: this.user !== null ? '/host' : '/login',
      per: this.user !== null ? '/per' : '/login',
      call: this.user !== null ? '/call' : '/login'
    }
  },
  methods: {},
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: { PreLogin, PostLogin }
}
</script>

<style scoped lang='less'>
.personal {
  position: relative;
  width: 100%;
  .bg {
    width: 100%;
  }
  .per-main {
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translateX(-50%);
    width: 320px;
    background-color: #fff;
    // background-color: skyblue;
    .buttom-img {
      display: block;
      width: 100%;
      height: 85px;
    }
  }
}
</style>
