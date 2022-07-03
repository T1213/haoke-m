<template>
  <div class="search-header">
    <van-search
      background="transparent"
      v-model="value"
      show-action
      placeholder="请输入小区或地址"
      @search="onSearch"
    >
      <template #label>
        <div class="area" @click="$router.push('/city')">
          <span>{{value}}</span>
          <van-icon name="arrow-down" />
        </div>
      </template>
      <template #action>
        <van-icon
          color="#fff"
          size="0.53rem"
          name="map-marked"
          @click="searchMapFn(value)"
        />
      </template>
    </van-search>
  </div>
</template>

<script>
import { getCityId } from '@/api/searchInput'
export default {
  created () { },
  data () {
    return {
      value: '北京'
    }
  },
  methods: {
    onSearch () { },
    async searchMapFn (value) {
      // 根据name请求ajax，获取返回的城市ID,将ID路由传参给map路由，在map路由里发送请求，获取该城市的房源信息
      const res = await getCityId(value)
      console.log('cityId', res)
      // 跳转到map路由
      this.$router.push('/map')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-search {
  align-items: center;
  padding: 10px unset;
  height: 34px;
  font-size: 14px;
  color: #333;
  // background-color: tomato;
  // .area{
  //   border-right: 1px solid #ccc;
  // }
  .van-icon {
    background-color: transparent;
  }
}
</style>
