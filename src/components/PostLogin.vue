<template>
  <div class="post-login">
    <!-- 背景图 -->
    <img :src="usrInfoList.avatar" />
    <div class="post-login-text">
      <div class="user">
        <img :src="usrInfoList.avatar" />
      </div>
      <h3>{{usrInfoList.nickname}}</h3>
      <van-button round type="info" class="back-btn" @click="logOutFn"
        >退出</van-button
      >
      <p>编辑个人资料 ▶</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post-login',
  props: {
    usrInfoList: {
      type: Object,
      require: true
    }
  },
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
  margin: 0 0 0 -27.5px;
  width: 375px;
  min-height: 300px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  .bg {
    width: 100%;
  }
  .post-login-text {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 2px;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .user {
      margin-left: 110px;
      margin-top: -29px;
      width: 60px;
      height: 60px;
      border: 4px solid #f5f5f5;
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
    h3 {
      // height: ;
      font-size: 12px;
      color: #333;
      text-align: center;
    }
    p {
      margin-top: 20px;
      font-size: 12px;
      color: #999;
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
  }
}
</style>
