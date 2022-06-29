<template>
  <div class="main">
    <MyNavBar title="唐宁街9号"></MyNavBar>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 房子基本信息 -->
    <div class="house-info">
      <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="custom-title">整租</div>
          <div>
            <van-tag type="success" color="#e1f5f8" text-color="#39becd"
              >近地铁
            </van-tag>
          </div>
        </template>
      </van-cell>
      <!-- 价格 -->
      <div class="important-info">
        <div class="price">
          <h3>
            12000
            <span>/月</span>
          </h3>
          <p>租金</p>
        </div>
        <div class="price">
          <h3>一室</h3>
          <p>房型</p>
        </div>
        <div class="price">
          <h3>80㎡</h3>
          <p>租金</p>
        </div>
      </div>
      <!-- 房子信息 -->
      <div class="house-detail">
        <div class="details">
          <p><span>装修：</span>精装</p>
          <p><span>楼层：</span>高楼层</p>
        </div>
        <div class="details">
          <p><span>朝向：</span>东</p>
          <p><span>类型：</span>普通住宅</p>
        </div>
      </div>
    </div>
    <!-- 地图 -->
    <div class="house-map">
      <div class="title">
        小区：
        <span>天山星城</span>
      </div>
      <img src="/img/bg.png" alt="" />
    </div>
    <!-- 配置 -->
    <div class="house-config">
      <h3>房屋配置</h3>
      <ul>
        <li>
          <p><i class="iconfont icon-kongtiao"></i></p>
          空调
        </li>
        <li>
          <p><i class="iconfont icon-bingxiang"></i></p>
          冰箱
        </li>
        <li>
          <p><i class="iconfont icon-reshuiqi"></i></p>
          热水器
        </li>
      </ul>
    </div>
    <!-- 概述 -->
    <div class="house-desc">
      <h3>房源概述</h3>
      <div>
        <div class="host">
          <div class="contact">
            <van-image round src="http://liufusong.top:8080/img/avatar.png" />
            <div class="user">
              <p>王女士</p>
              <div class="renzheng">
                <i class="iconfont icon-renzheng"></i>已认证房主
              </div>
            </div>
          </div>
          <button>发消息</button>
        </div>
        <div class="content">
          1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
          2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
          3.人车分流，环境优美。
          4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
        </div>
      </div>
    </div>
    <!--猜你喜欢 -->
    <div class="guess">
      <h3>猜你喜欢</h3>
      <div class="list">
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
                  <van-tag
                    type="success"
                    color="#e1f5f8"
                    text-color="#39becd"
                    >{{ obj.tags[0] }}</van-tag
                  >
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
    </div>
  </div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue'
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: { MyNavBar }
}
</script>

<style scoped lang='less'>
.main {
  padding-bottom: 50px;
  background-color: #f6f5f6;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .house-info {
    padding: 15px;
    background-color: #fff;
    color: #333;
    .custom-title {
      margin-bottom: 10px;
      height: 18px;
      line-height: 18px;
      font-size: 16px;
      font-weight: normal;
    }
    .important-info {
      display: flex;
      border-top: 1px solid #cecece;
      border-bottom: 1px solid #cecece;
      margin: 15px 0;
      padding: 15px 0;
      .price {
        text-align: center;
        flex: 1;
        h3 {
          color: #fa5741;
          font-size: 18px;
          font-weight: bolder;
          span {
            font-size: 12px;
            font-weight: 400;
          }
        }
        p {
          height: 26px;
          line-height: 26px;
          text-align: center;
          color: #999;
          font-size: 14px;
        }
      }
    }
    .house-detail {
      display: flex;
      font-size: 13px;
      text-align: left;
      overflow: hidden;
      .details {
        flex: 1;
        min-width: 10px;
        text-align-last: left;
        font-size: 13px;
        color: #333;
        span {
          display: inline-block;
          color: #999;
          padding-right: 5px;
          line-height: 26px;
        }
      }
    }
  }
  .house-map {
    margin-top: 10px;
    background: #fff;
    color: #333;
    font-size: 14px;
    .title {
      margin: 0 3%;
      line-height: 44px;
      color: #666;
    }
    img {
      width: 100%;
    }
  }
  .house-config {
    margin-bottom: 10px;
    padding: 0 10px;
    background: #fff;
    h3 {
      font-weight: 700;
      font-size: 15px;
      margin-bottom: 10px;
      padding: 15px 0;
      border-bottom: 1px solid #cecece;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      color: #333;
      font-size: 14px;
      background: #fff;
      li {
        margin: 10px 0;
        width: 20%;
        line-height: 23px;
      }
    }
  }
  .house-desc {
    margin: 10px 0;
    padding: 0 10px;
    line-height: 150%;
    background: #fff;
    h3 {
      font-weight: 700;
      font-size: 15px;
      margin-bottom: 10px;
      padding: 15px 0;
      border-bottom: 1px solid #cecece;
    }
    .host {
      display: flex;
      justify-content: space-between;
      .contact {
        display: flex;
        align-items: center;
        .van-image {
          display: block;
          width: 52px;
          height: 52px;
          margin: 10px 10px 0 0;
        }
        .user {
          font-size: 14px;
          color: #333;
          padding: 15px 0 0 5px;
          .renzheng {
            font-size: 12px;
            color: #fa5741;
            line-height: 100%;
          }
        }
      }
      button {
        display: block;
        margin-top: 29px;
        width: 80px;
        height: 35px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        color: #33be85;
        border: 1px solid #33be85;
        border-radius: 3px;
        padding: 3px 15px;
      }
    }
    .content {
      font-size: 14px;
      line-height: 1.6;
      padding: 10px 0;
      color: #333;
    }
  }
  .guess {
    background-color: #fff;
    h3 {
      font-weight: 700;
      font-size: 15px;
      margin-bottom: 10px;
      padding: 15px 0;
      border-bottom: 1px solid #cecece;
    }
  }
}
</style>
