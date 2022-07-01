<template>
  <div class="personal">
    <div class="per-main">
      <!-- 顶部 -->
      <PostLogin v-if="user" :usrInfoList="usrInfoList" ></PostLogin>
      <PreLogin v-else></PreLogin>
      <!-- 中间部分 -->
      <van-grid clickable :column-num="3">
        <van-grid-item text="我的收藏" icon="star-o" @click="pushToLove">
        </van-grid-item>
        <van-grid-item text="我的出租" icon="home-o" @click="pushToRent">
        </van-grid-item>
        <van-grid-item text="看房记录" icon="clock-o"> </van-grid-item>
        <van-grid-item text="成为房主" icon="notes-o"> </van-grid-item>
        <van-grid-item text="个人资料" icon="user-o"> </van-grid-item>
        <van-grid-item text="联系我们" icon="service-o"> </van-grid-item>
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
import { getUserInfo } from '@/api/user'
import { mapState } from 'vuex'
import PreLogin from '@/components/PreLogin.vue'
import PostLogin from '@/components/PostLogin.vue'
export default {
  created () {
    if (this.user) {
      this.getUserInfo()
    }
  },
  data () {
    return {
      usrInfoList: {}
    }
  },
  methods: {
    async getUserInfo () {
      try {
        const res = await getUserInfo()
        console.log('getUserInfo', res)
        this.usrInfoList = res.data.body
      } catch (error) {
        console.log(error)
      }
    },
    pushToLove () {
      if (this.user) {
        this.$router.push('/love')
      }
    },
    pushToRent () {
      if (this.user) {
        this.$router.push('/rent')
      }
    }
  },
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
  // .bg {
  //   width: 100%;
  // }
  .per-main {
    position: absolute;
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
