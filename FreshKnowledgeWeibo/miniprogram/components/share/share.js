// components/share/share.js
const {Index}=require('../../pages/datas/Index.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    data:Index[0]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    saveImageTo() {
      wx.downloadFile({
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559378430273&di=cc130a51d8149d92b714172761eeade8&imgtype=0&src=http%3A%2F%2Fimg5.pcpop.com%2FArticleImages%2F730x547%2F4%2F4314%2F00431432227746047.jpg',
        success: function (res) {
          let path = res.tempFilePath
          wx.saveImageToPhotosAlbum({
            filePath: path,
            success(res) {
              console.log(res)
            },
            fail(res) {
              console.log(res)
            },
            complete(res) {
              console.log(res)
            }
          })
        }, fail: function (res) {
          console.log(res)
        }
      })
     
    },
    closeShare: function (e) {
      // console.log(e);
      console.log(this.data.show)
      let show = this.data.show;
      let _show = !this.data.show;
      this.setData({
        show: _show
      })
    },

    onShareAppMessage: function (res) {
      console.log(1)
      
      return {
        title: {title},
         path:{url}
  
    }
    }
   
  }
})
