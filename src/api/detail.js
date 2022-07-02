import request from '@/utils/request'
// export const getHouseDetail = ({ id }) => {
//   return request({
//     url: '/houses',
//     params: {
//       id
//     }
//   })
// }
// 获取房屋详情信息
export const getHouseDetail = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
// 添加收藏
export const addLove = (id) => {
  return request({
    method: 'POST',
    url: `/user/favorites/${id}`
  })
}
// 删除收藏
export const cancelLove = (id) => {
  return request({
    method: 'DELETE',
    url: `/user/favorites/${id}`
  })
}
