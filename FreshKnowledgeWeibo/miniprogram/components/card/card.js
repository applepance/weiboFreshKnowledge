// components/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    isOld: {
      type: Boolean,
      value: false
    },
    time: {
      type: String,
      value: ''
    },
    focusNum: {
      type: Number,
      value: null
    },
    imgUrl: {
      type: String,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    shareIsOpen: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goInner() {
      wx.navigateTo({
        url: '../../pages/news/news'
      })
    },
    onShareAppMessage: function() {
      return {
        title: '微博鲜知',
        path: '/pages/index/index',
        imageUrl: '',
        success: function(shareTickets) {
          if (shareTickets.errMsg == 'shareAppMessage:ok') {
            wx.showModal({
              title: '提示',
              content: '分享成功',
            })
          }
        },
        fail: function(res) {
          console.log(res + '失败');
          // 转发失败
        },
        complete: function(res) {
          // 不管成功失败都会执行
        }
      }
    }
  }
})