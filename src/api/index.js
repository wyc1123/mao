import http from "../utils/http";
// 首页
export const getHomeData = (params) => http({ url:'/home', data: params })
// 
export const getHomeCat = (lei) => http({ url: '/category', data: lei })
// export const getHomeSe = (search) => http({ url: '/hotData', data: search })
// export const getHomeSe = (search, url, tean) => http({ data: search, url: url, tean: tean })
