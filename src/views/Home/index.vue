<template>
  <div>
    <!-- 搜索框 -->
    <!-- <MyInput></MyInput> -->
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="'http://liufusong.top:8080' + image.imgSrc"
      /></van-swipe-item>
    </van-swipe>
    <!-- 页面导航 -->
    <van-grid clickable :column-num="4">
      <van-grid-item text="整租" to="/search">
        <van-image src="/img/zhengzu.png" />
        <h2>整租</h2>
      </van-grid-item>
      <van-grid-item text="合租" to="/search">
        <van-image src="/img/hezu.png" />
        <h2>合租</h2>
      </van-grid-item>
      <van-grid-item text="地图找房" to="/searchmap">
        <van-image src="/img/dituzhaofang.png" />
        <h2>地图找房</h2>
      </van-grid-item>
      <van-grid-item text="去出租" to="/login">
        <van-image src="/img/chuzu.png" />
        <h2>去出租</h2>
      </van-grid-item>
    </van-grid>
    <!-- 租房小组模块 -->
    <div class="group">
      <h3>
        租房小组
        <span class="more">更多</span>
      </h3>
      <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="item in groupList" :key="item.id">
          <div class="group-item">
            <van-image
              class="left"
              :src="'http://liufusong.top:8080' + item.imgSrc"
            />

            <div class="group-text">
              <p>{{ item.title }}</p>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 租房资讯 -->
    <div class="news group">
      <h3>
        租房资讯
        <span class="more">更多</span>
      </h3>
      <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="news-text" v-for="obj in newList" :key="obj.id">
            <img
              class="news-left"
              :src="'http://liufusong.top:8080' + obj.imgSrc"
            />
            <div class="new-right">
              <h2>{{ obj.title }}</h2>
              <van-tag plain color="#96999b" text-color="#96999b" type="primary"
                >租房</van-tag
              >
              <van-tag
                plain
                color="#96999b"
                text-color="#96999b"
                type="primary"
                >{{ obj.from }}</van-tag
              >
              <van-tag plain color="#96999b" text-color="#96999b" type="primary"
                >限购</van-tag
              >

              <span class="date">{{ obj.date }}</span>
            </div>
          </div>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
// import MyInput from '@/components/MyInput.vue'
import { getSwiperAPI, getGroupsAPI, getNewsAPI } from '@/api'
export default {
  created () {
    this.fn()
    this.getGroupFn()
    this.getNewsFn()
  },
  data () {
    return {
      images: [],
      groupList: [],
      area: 'AREA|88cff55c-aaa4-e2e0',
      newList: []
    }
  },
  methods: {
    async fn () {
      const res = await getSwiperAPI()
      console.log(res)
      this.images = res.data.body
    },
    async getGroupFn () {
      const res = await getGroupsAPI()
      console.log(res)
      this.groupList = res.data.body
    },
    async getNewsFn () {
      const res = await getNewsAPI(this.area)
      console.log(res)
      this.newList = res.data.body
    }
  },
  computed: {},
  watch: {},
  filters: {}
  // components: { MyInput }
}
</script>

<style scoped lang='less'>
.van-swipe-item img {
  width: 100%;
}
.van-grid-item {
  height: 102px;
  padding: 10px 0;
  .van-image {
    width: 60px;
    height: 60px;
  }
  h2 {
    font-size: 14px;
    font-weight: normal;
    color: #333;
    text-align: center;
    line-height: 16px;
    height: 16px;
  }
}
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
.news-text {
  display: flex;
  margin-bottom: 7px;
  .news-left {
    width: 120px;
    margin-right: 15px;
  }
  .new-right {
    position: relative;
    h2 {
      font-size: 16px;
      margin-right: 20px;
    }
    .van-tag {
      margin-right: 7px;
    }
    .date {
      position: absolute;
      right: 8px;
      top: 85px;
      font-size: 12px;
      color: #ccc;
    }
  }
}
</style>
