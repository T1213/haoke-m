<template>
  <van-nav-bar :title="title" fixed z-index="2">
    <template #left>
      <van-icon name="arrow-left" size="18" @click="$router.go(-1)" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true
    }
  },
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
</style>
