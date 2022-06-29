<template>
  <div class="search-header">
    <div class="left">
      <div class="area-select">
        <span class="name">111</span>
        <i class="iconfont icon-arrow"></i>
      </div>
      <van-cell-group>
        <van-field
          v-model="value"
          left-icon="search"
          clearable
          placeholder="请输入小区或地址"
        />
      </van-cell-group>
    </div>
    <div class="right">
      <van-icon name="location-o" />
    </div>
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
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.search-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 34px;
  font-size: 14px;
  color: #333;
  background-color: tomato;
  .left {
    display: flex;
    .area-select {
      width: 42px;
      height: 34px;
      text-align: center;
      line-height: 47px;
      color: #333;
    }
  }
}
</style>
