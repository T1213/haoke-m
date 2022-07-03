import request from '@/utils/request'
// 获取热门城市列表
export const getHotCityList = () => {
  return request({
    url: '/area/hot'
  })
}

// 获取城市列表 获取哪一级的城市，1 表示获取所有城市数据 2 表示城市下区的数据
export const getCityList = (level) => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}
// 获取城市信息（城市ID）
export const getCityId = (name) => {
  return request({
    url: '/area/info',
    params: {
      name
    }
  })
}
// 获取城市房源信息
export const getCityHouseCount = (id) => {
  return request({
    url: '/area/info',
    params: {
      id
    }
  })
}
