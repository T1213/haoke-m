<template>
  <div>
    <div class="post-login">
      <div class="post-login-text">
        <div class="user">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" />
        </div>
        <h3>好客_9527</h3>
        <van-button round type="info" class="back-btn" @click="logOutFn"
          >退出</van-button
        >
        <p>编辑个人资料 ▶</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {
    logOutFn () {
      this.$dialog.confirm({
        title: '燕子！不要走好吗！燕子~'
      }).then(() => {
        // on confirm
        this.$store.commit('saveToken', null)
      }).catch(() => {
        // on cancel
        console.log('取消执行这里')
      })
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.post-login {
  position: relative;
  // background-color: #fff;
  margin: 0 auto 3px;
  width: 320px;
  height: 208px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  box-shadow: 0 0 10px 2px #ddd;
  .post-login-text {
    position: absolute;
    left: 50%;
    top: -30px;
    transform: translateX(-50%);
    // background-color: bisque;
    .user {
      width: 60px;
      height: 60px;
      border: 4px solid #f5f5f5;
      border-radius: 50%;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    h3 {
      margin: 10px auto;
      font-size: 14px;
      font-weight: normal;
      color: #333;
      text-align: center;
    }
    .back-btn {
      display: block;
      margin: 10px auto;
      width: 55px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      background-color: #21b97a;
      padding: 0 8px;
      border: none;
    }
    p {
      margin-top: 20px;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
