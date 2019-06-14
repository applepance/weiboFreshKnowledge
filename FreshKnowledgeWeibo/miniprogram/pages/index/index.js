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
        imgUrl: 'http://www.cssn.cn/zx/bwyc/201906/W020190609414674181478.png'
      },
      {
        title: '青春无畏，高考加油',
        isOld: true,
        time: '四分钟前',
        focusNum: 1225612,
        imgUrl: 'http://cms-bucket.ws.126.net/2019/06/09/fcbb573d13e24fbab290b07947f4bb26.jpeg'
      },
      {
        title: '大都市租房难租金高 北上深月收入几乎用来付房租',
        isOld: true,
        time: '昨天',
        focusNum: 1221782,
        imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3522195656,3413195003&fm=173&app=25&f=JPEG?w=640&h=425&s=F2D634C44AE5D95F0E6CF01F030080C1'
      }
    ]
  },
})   