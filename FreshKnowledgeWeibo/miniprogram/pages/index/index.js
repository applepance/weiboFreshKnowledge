import {
  formatTime
} from '../../utils/api.js'

Page({
  data: {
    mainNewsList: [{
        title: '头条新闻今日快讯 | 清华大学校内发现87座明清墓',
        isOld: true,
        time: '刚刚',
        focusNum: 122312,
      imgUrl: 'http://img1.imgtn.bdimg.com/it/u=8564275,3064331892&fm=26&gp=0.jpg'
      },
      {
        title: '青春无畏，高考加油',
        isOld: true,
        time: '四分钟前',
        focusNum: 1225612,
        imgUrl: 'http://img1.imgtn.bdimg.com/it/u=8564275,3064331892&fm=26&gp=0.jpg'
      },
      {
        title: '大都市租房难租金高 北上深月收入几乎用来付房租',
        isOld: true,
        time: '昨天',
        focusNum: 1221782,
        imgUrl: 'http://img1.imgtn.bdimg.com/it/u=8564275,3064331892&fm=26&gp=0.jpg'
      }
    ]
  },
})