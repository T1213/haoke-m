import request from '@/utils/request'
export const getCityId = ({ name }) => {
  return request({
    url: '/area/info',
    params: {
      name
    }
  })
}
