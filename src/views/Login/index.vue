<template>
  <div>
    <van-nav-bar title="账号登陆">
      <template #left>
        <van-icon name="arrow-left" size="18" />
      </template>
    </van-nav-bar>
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入正确的账号' }]"
      />
      <van-field
        v-model="password"
        name="password"
        type="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写正确的密码' }]"
      />
      <div style="margin: 16px">
        <van-button block native-type="submit" class="login-btn"
          >登陆</van-button
        >
      </div>
    </van-form>
    <!-- 注册 -->
    <van-cell title="还没有账号，去注册~" to="register" class="register-cell" />
  </div>
</template>

<script>
import { login } from '@/api/user.js'
export default {
  created () { },
  data () {
    return {
      username: 'heima',
      password: '123456'
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const res = await login(values)
        console.log(res)
        this.$store.commit('saveToken', res.data.body)
        this.$toast.success('登陆成功')
      } catch (error) {
        console.log(error, 123)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.login-btn {
  width: 100%;
  height: 50px;
  background-color: #1cb676;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  border: 1px solid #1cb676;
}
.van-cell__title {
  text-align: center;
  color: #333;
}
</style>
