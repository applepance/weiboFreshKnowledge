// miniprogram/pages/news/news.js
const {topic} = require('../../datas/Topic')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    des: '',
    userName: '',
    picUrl: '',
    attention: '43652',
    list: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      des: topic[0].des,
      userName: topic[0].userName,
      picUrl: topic[0].picUrl,
      list: topic[0].types[0].list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})