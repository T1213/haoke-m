<template>
  <div>
    <div class="pre-login">
      <div class="pre-login-text">
        <div class="visitor">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" />
        </div>
        <p>游客</p>
        <van-button type="primary" to="login">去登录</van-button>
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
  margin: 0 auto 3px;
  width: 320px;
  height: 165px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  box-shadow: 0 0 10px 2px #ddd;
  .pre-login-text {
    position: absolute;
    left: 50%;
    top: -30px;
    transform: translateX(-50%);
    // background-color: bisque;
    .visitor {
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
