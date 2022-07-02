import request from '@/utils/request'
import store from '@/store'
export const love = () => {
  return request({
    url: '/user/favorites'
  })
}
// 查看房屋是否收藏
export const confirmlLove = (id) => {
  return request({
    url: `/user/favorites/${id}`
  })
}
