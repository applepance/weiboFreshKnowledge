// miniprogram/pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  wechatLogin(res, err) {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {//授权了，可以获取用户信息了
          wx.getUserInfo({
            success: (res) => {
              wx.navigateTo({
                url: '../index/index',
              })
            }
          })
        } else {//未授权，跳到授权页面
          wx.redirectTo({
            url: '../info/info',//授权页面
          })
        }
      }
    })
  },
  phoneLogin() {
    wx.showModal({
      title: '提示',
      content: '非常抱歉，此功能暂未开放',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})