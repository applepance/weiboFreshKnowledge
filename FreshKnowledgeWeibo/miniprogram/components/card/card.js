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
    goShare() {
      wx.navigateTo({
        url: '../../pages/share/share'
      })
    }
  }
})
