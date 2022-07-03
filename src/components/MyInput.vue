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
          <span>{{$store.state.cityName}}</span>
          <van-icon name="arrow-down" />
        </div>
      </template>
      <template #action>
        <van-icon
          color="#fff"
          size="0.53rem"
          name="map-marked"
          @click="$router.push('/map')"
        />
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch () { }
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
  .van-icon {
    background-color: transparent;
  }
}
</style>
