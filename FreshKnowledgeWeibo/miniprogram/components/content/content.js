// components/content/content.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    list: {
      type: Array,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isFolded: true
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
   change: function () {
      this.setData({
        isFolded: !this.data.isFolded
      })
    }
  }
})
