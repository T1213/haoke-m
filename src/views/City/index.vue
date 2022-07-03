<template>
  <div class="city">
    <my-nav-bar title="城市列表"></my-nav-bar>
    <!-- 城市列表 -->
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell :title="$store.state.cityName" />

      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        :title="item.label"
        v-for="(item, index) in hotCityList"
        :key="index"
        @click="saveCity(item.label)"
      />

      <div v-for="(value, key) in cityListObj" :key="key">
        <van-index-anchor index="key">{{ key }}</van-index-anchor>
        <van-cell
          :title="item"
          v-for="item in value"
          :key="item"
          @click="saveCity(item)"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue'
import { getCityList, getHotCityList, getCityId, getCityHouseCount } from '@/api/city'
export default {
  created () {
    this.getCityList()
    this.getHotCityList()
  },
  data () {
    return {
      cityList: [],
      hotCityList: [],
      cityId: '',
      CityHouseCount: []
    }
  },
  methods: {
    async getCityList () {
      try {
        const res = await getCityList(1)
        console.log('list', res)
        this.cityList = res.data.body
        console.log(this.CityFirstnameList)
        console.log(this.cityListObj)
      } catch (err) {
        console.log(err)
      }
    },
    async getHotCityList () {
      try {
        const res = await getHotCityList()
        console.log('hotCityList', res)
        this.hotCityList = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    async saveCity (name) {
      try {
        const info = await getCityId(name)
        this.cityId = info.data.body.value
        if (this.cityId) {
          const res = await getCityHouseCount(this.cityId)
          this.CityHouseCount = res.data.body
        }
        if (this.CityHouseCount === true) {
          this.$store.commit('saveCityName', name)
          this.$router.push('/home')
          // console.log(111, this.hotCityList, this.CityHouseCount)
        } else {
          this.Toast.fail('该城市暂无房源')
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    CityFirstnameList () {
      let arr = []
      this.cityList.forEach(item => {
        arr.push(item.short.substring(0, 1).toUpperCase())
      })
      arr.sort()
      arr = [...new Set(arr)]
      return arr
    },
    cityListObj () {
      const obj = {}
      this.CityFirstnameList.forEach(indexItem => {
        obj[indexItem] = []
        this.cityList.forEach(cityItem => {
          if (cityItem.short.substring(0, 1).toUpperCase() === indexItem) {
            obj[indexItem].push(cityItem.label)
          }
        })
      })
      return obj
    },
    indexList () {
      return ['#', '热', ...this.CityFirstnameList]
    }

  },
  watch: {},
  filters: {},
  components: { MyNavBar }
}
</script>

<style scoped lang='less'>
.city {
  padding-top: 50px;
}
.van-index-bar__index {
  width: 15px;
  height: 27px;
}
/deep/.van-index-bar__index--active {
  color: #fff;
  background-color: #21b97a;
  border-radius: 100%;
  display: inline-block;
  font-size: 12px;
  width: 15px;
  height: 15px;
  line-height: 15px;
  padding: 1px 12px 14px 3px;
}
</style>
