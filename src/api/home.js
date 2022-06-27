import request from '@/utils/request'
export const getSwiper = () => request({
  url: '/home/swiper'
})

export const getGroups = () => request({
  url: '/home/groups'
})

export const getNews = params => request({
  url: '/home/news',
  params
})
