<template>
  <div class="main">
    <MyNavBar :title="detailArr.community"></MyNavBar>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(imageUrl, index) in detailArr.houseImg"
        :key="index"
      >
        <img :src="'http://liufusong.top:8080' + imageUrl"
      /></van-swipe-item>
    </van-swipe>

    <!-- 房子基本信息 -->
    <div class="house-info">
      <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="custom-title">整租</div>
          <div>
            <van-tag
              type="success"
              color="#e1f5f8"
              text-color="#39becd"
              v-for="(tag, index) in detailArr.tags"
              :key="index"
              >{{ tag }}
            </van-tag>
          </div>
        </template>
      </van-cell>
      <!-- 价格 -->
      <div class="important-info">
        <div class="price">
          <h3>
            {{ detailArr.price }}
            <span>/月</span>
          </h3>
          <p>租金</p>
        </div>
        <div class="price">
          <h3>{{ detailArr.roomType }}</h3>
          <p>房型</p>
        </div>
        <div class="price">
          <h3>{{ detailArr.size }}㎡</h3>
          <p>租金</p>
        </div>
      </div>
      <!-- 房子信息 -->
      <div class="house-detail">
        <div class="details">
          <p><span>装修：</span>精装</p>
          <p><span>楼层：</span>{{ detailArr.floor }}</p>
        </div>
        <div class="details">
          <p v-if="detailArr.oriented">
            <span>朝向：</span>{{ detailArr.oriented[0] }}
          </p>
          <p><span>类型：</span>普通住宅</p>
        </div>
      </div>
    </div>
    <!-- 地图 -->
    <!-- 返回的数据中有包含经纬度的数组，可以利用经纬度数据再请求百度api, -->
    <div class="house-map">
      <div class="title">
        小区：
        <span>{{ detailArr.community }}</span>
      </div>
      <div id="houseMap"></div>
    </div>
    <!-- 配置 -->
    <div class="house-config">
      <h3>房屋配置</h3>
      <ul>
        <li v-for="(item, index) in detailArr.supporting" :key="index">
          <p><i class="iconfont icon-yigui" v-if="item === '衣柜'"></i></p>
          <p><i class="iconfont icon-xiyiji" v-if="item === '洗衣机'"></i></p>
          <p><i class="iconfont icon-kongtiao" v-if="item === '空调'"></i></p>
          <p>
            <i
              class="iconfont icon-meiqitianranqi"
              v-if="item === '天然气'"
            ></i>
          </p>
          <p><i class="iconfont icon-bingxiang" v-if="item === '冰箱'"></i></p>
          <p><i class="iconfont icon-nuanqi" v-if="item === '暖气'"></i></p>
          <p><i class="iconfont icon-dianshiji" v-if="item === '电视'"></i></p>
          <p><i class="iconfont icon-reshuiqi" v-if="item === '热水器'"></i></p>
          <p><i class="iconfont icon-wifi" v-if="item === '宽带'"></i></p>
          <p><i class="iconfont icon-shafa" v-if="item === '沙发'"></i></p>
          {{ item }}
        </li>
      </ul>
    </div>
    <!-- 概述 -->
    <div class="house-desc">
      <h3>房源概述</h3>
      <div>
        <div class="host">
          <div class="contact">
            <van-image round :src="usrInfoList.avatar" />
            <div class="user">
              <p>{{ usrInfoList.nickname }}</p>
              <div class="renzheng">
                <i class="iconfont icon-renzheng"></i>已认证房主
              </div>
            </div>
          </div>
          <button>发消息</button>
        </div>
        <!-- 描述信息 -->
        <div class="content">{{ detailArr.description }}</div>
      </div>
    </div>
    <!--猜你喜欢 -->
    <div class="guess">
      <h3>猜你喜欢</h3>
      <div class="list">
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <div class="love-text">
              <img class="love-left" src="/public/img/avatar.png" />
              <div class="love-right">
                <h2>南海</h2>
                <p>海底</p>
                <div class="tag">
                  <van-tag type="success" color="#e1f5f8" text-color="#39becd"
                    >近海底隧道</van-tag
                  >
                </div>

                <div class="price">
                  1200
                  <span>元/月</span>
                </div>
              </div>
            </div>
          </template>
        </van-cell>
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <div class="love-text">
              <img class="love-left" src="/public/img/avatar.png" />
              <div class="love-right">
                <h2>东海1号</h2>
                <p>海底</p>
                <div class="tag">
                  <van-tag type="success" color="#e1f5f8" text-color="#39becd"
                    >近海底隧道</van-tag
                  >
                </div>

                <div class="price">
                  1200
                  <span>元/月</span>
                </div>
              </div>
            </div>
          </template>
        </van-cell>
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <div class="love-text">
              <img class="love-left" src="/public/img/avatar.png" />
              <div class="love-right">
                <h2>白马地块</h2>
                <p>☹☹☾☽☹</p>
                <div class="tag">
                  <van-tag type="success" color="#e1f5f8" text-color="#39becd"
                    >近地铁</van-tag
                  >
                </div>

                <div class="price">
                  122200
                  <span>元/月</span>
                </div>
              </div>
            </div>
          </template>
        </van-cell>
      </div>
    </div>
    <!-- 底部功能键 -->
    <div class="tab-buttom">
      <div class="left love-btn" @click="changeLove">
        <i class="iconfont icon-shoucang1" v-if="isFavorite === false"></i>
        <i class="iconfont icon-shoucang" v-else></i>
        收藏
      </div>
      <div class="love-btn">在线咨询</div>
      <div class="love-btn right"><a href="tel:400-618-4000">电话预约</a></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store'
import { getUserInfo } from '@/api/user'
import { getHouseDetail, addLove, cancelLove, confirmlLove } from '@/api/detail'
import MyNavBar from '@/components/MyNavBar.vue'
export default {
  created () {
    if (store.state.user) {
      this.getHouseDetail()
      this.getUserInfo()
      this.fn()
    }
  },
  mounted () { },
  data () {
    return {
      detailArr: {},
      usrInfoList: {}
    }
  },
  methods: {
    async getHouseDetail () {
      try {
        const res = await getHouseDetail(this.$store.state.houseCode)
        console.log(111, res)
        this.detailArr = res.data.body
      } catch (error) {
        console.log(error)
      }
    },
    async getUserInfo () {
      try {
        const res = await getUserInfo()
        console.log('getUserInfo', res)
        this.usrInfoList = res.data.body
      } catch (error) {
        console.log(error)
      }
    },
    async fn () {
      try {
        const res = await confirmlLove(this.houseCode)
        console.log('确认收藏' + res)
        // this.loveList = res.data.body
        this.isFavorite = res.data.body.isFavorite
      } catch (err) {
        console.log(err)
      }
    },
    async changeLove () {
      if (this.isFavorite) {
        try {
          const res = await cancelLove(this.houseCode)
          console.log('取消收藏', res)
          this.$store.commit('saveIsFavorite', false)
          this.$toast.success('已添加至收藏')
        } catch (error) {
          console.log(error)
        }
      } else {
        try {
          const res = await addLove(this.houseCode)
          console.log('添加收藏', res)
          this.$store.commit('saveIsFavorite', true)
          this.$toast.fail('已取消收藏')
        } catch (error) {
          console.log(error)
        }
      }
    },
    getMap (content) {
      // console.log('1233' + this.detailArr.coord.latitude, this.detailArr.coord.longitude)
      const { BMapGL } = window
      const map = new BMapGL.Map('houseMap')
      // 创建地图实例
      const point = new BMapGL.Point(this.detailArr.coord.longitude, this.detailArr.coord.latitude)
      // 创建点坐标
      map.centerAndZoom(point, 15)
      // 初始化地图，设置中心点坐标和地图级别
      // 可以滚轮缩放
      map.enableScrollWheelZoom(true)
      // 创建点标记
      // const marker1 = new BMapGL.Marker(new BMapGL.Point(116.404, 39.925))
      // 在地图上添加点标记
      // map.addOverlay(marker1)
      // 添加文本样式
      const label = new BMapGL.Label(content, { // 创建文本标注
        position: point,
        offset: new BMapGL.Size(10, 20)
      })
      map.addOverlay(label) // 将标注添加到地图中
      label.setStyle({ // 设置label的样式
        color: 'rgb(255, 255, 255)',
        fontSize: '12px',
        backgroundColor: 'rgb(238, 93, 91)',
        border: '1px solid rgb (255, 0, 0)',
        padding: '5px 10px',
        whiteSpace: 'nowrap',
        height: '25px'
      })
    }
  },
  computed: {
    ...mapState(['isFavorite', 'houseCode'])
  },
  watch: {
    'detailArr.community': {
      handler (newval) {
        this.getMap(newval)
      },
      immediate: true

    }
  },
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
    #houseMap {
      height: 145px;
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
        p {
          .iconfont {
            font-size: 20px;
          }
        }
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
      margin-top: 7px;
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
  .tab-buttom {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #cecece;
    text-align: center;
    font-size: 17px;
    color: #999;
    background-color: #fff;
    .left {
      border-right: 1px solid #e8e8e9;
      margin-left: 6px;
      .icon-shoucang {
        color: #fa5741;
      }
    }
    .right {
      background-color: #33be85;
      a {
        color: #fff;
      }
    }

    .love-btn {
      flex: 1;
      min-width: 10px;
      text-align: center;
      font-size: 17px;
      color: #999;
      line-height: 50px;
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
}
</style>
