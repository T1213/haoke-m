import request from '@/utils/request'
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}
// 请求用户资料
export const getUserInfo = () => {
  return request({
    url: '/user'
  })
}
