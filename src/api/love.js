import request from '@/utils/request'
import store from '@/store'
export const love = () => {
  return request({
    url: '/user/favorites'
  })
}
