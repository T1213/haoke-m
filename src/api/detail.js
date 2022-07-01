import request from '@/utils/request'
// export const getHouseDetail = ({ id }) => {
//   return request({
//     url: '/houses',
//     params: {
//       id
//     }
//   })
// }
export const getHouseDetail = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
