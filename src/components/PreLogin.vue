<template>
  <div class="pre-login">
    <!-- 背景图 -->
    <img src="http://liufusong.top:8080/img/profile/bg.png" class="bg" />
    <div class="pre-login-text">
      <div class="visitor">
        <img src="http://liufusong.top:8080/img/profile/avatar.png" />
      </div>
      <p>游客</p>
      <van-button type="primary" to="login">去登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pre-login',
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.pre-login {
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
  .pre-login-text {
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
    .visitor {
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
    p {
      // height: ;
      font-size: 12px;
      color: #333;
      text-align: center;
    }
    .van-button {
      margin-top: 10px;
      width: 70px;
      height: 30px;
      border-radius: 5px;
      font-size: 14px;
      color: #fff;
      background-color: #21b97a;
      padding: 0 8px;
    }
  }
}
</style>
