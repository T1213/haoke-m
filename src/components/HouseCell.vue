<template>
 <van-cell>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <div class="love-text" v-for="obj in loveList" :key="obj.id">
          <img
            class="love-left"
            :src="'http://liufusong.top:8080' + obj.houseImg"
          />
          <div class="love-right">
            <h2>{{ obj.title }}</h2>
            <p>{{ obj.desc }}</p>
            <div class="tag">
              <van-tag type="success" color="#e1f5f8" text-color="#39becd">{{
                obj.tags[0]
              }}</van-tag>
            </div>

            <div class="price">
              {{ obj.price }}
              <span>元/月</span>
            </div>
          </div>
        </div>
      </template>
    </van-cell>
</template>

<script>
export default {
  created () {},
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
