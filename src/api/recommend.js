import jsonp from 'common/js/jsonp'
import {commonParam, options} from 'api/myConfig'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParam, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
export function getDiscList() {
  const url = 'api/getDiscList'

  const data = Object.assign({}, commonParam, {
    platform: 'yqq',
    uin: 0,
    rnd: Math.random(),
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 5,
    ein: 29,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

