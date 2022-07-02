<template>
  <div>
    <my-nav-bar title="收藏列表"></my-nav-bar>
    <van-cell>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <div
          class="love-text"
          v-for="obj in loveList"
          :key="obj.id"
          @click="saveHouseCodeFn(obj.houseCode)"
        >
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
  </div>
</template>

<script>
import store from '@/store'
import { love, confirmlLove } from '@/api/love'
import MyNavBar from '@/components/MyNavBar.vue'

export default {
  created () {
    if (store.state.user) {
      this.getLoveListFn()
    }
  },
  data () {
    return {
      loveList: []
    }
  },
  methods: {
    async getLoveListFn () {
      try {
        const res = await love()
        console.log('loveList', res)
        this.loveList = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    async saveHouseCodeFn (houseCode) {
      this.$store.commit('saveHouseCode', houseCode)
      // 保存isFavorite(先发送ajax，再把返回的isFavorite存到vuex)
      const res = await confirmlLove(houseCode)
      console.log('查看收藏', res)
      this.$store.commit('saveIsFavorite', res.data.body.isFavorite)
      this.$router.push('/detail')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { MyNavBar }
}
</script>

<style scoped lang='less'>
.group {
  background-color: #f6f5f6;
  padding: 0 10px;
  overflow: hidden;
  h3 {
    position: relative;
    margin: 15px 0 15px 10px;
    width: 100%;
    height: 17px;
    line-height: 17px;
    font-size: 14px;
    color: #333;
    span {
      position: absolute;
      right: 10px;
      font-size: 12px;
      color: #787d82;
      font-weight: normal;
    }
  }
}
.group-item {
  display: flex;
  // justify-content: space-between;
  width: 100%;
  height: 100%;
  .left {
    width: 50px;
    height: 50px;
    margin: 0 10px;
    text-align: left;
  }
  .group-text p {
    font-size: 16px;
    color: #333;
    text-align: left;
    margin: 0;
    padding: 0;
  }
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }
}
.love-text {
  display: flex;
  margin-bottom: 7px;
  .love-left {
    width: 106px;
    height: 80px;
    margin-right: 5px;
  }
  .love-right {
    position: relative;
    h2 {
      margin: 0;
      line-height: 22px;
      font-size: 15px;
      color: #394043;
    }
    p {
      font-size: 12px;
      color: #afb2b3;
      margin: 0;
    }
    .tag {
      margin-top: -4px;
    }
    .price {
      font-weight: 700;
      color: #fa5741;
      font-size: 16px;
      span {
        font-size: 12px;
        font-weight: normal;
      }
    }
  }
}
</style>
