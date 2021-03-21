// pages/permana/permana.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   * show代表是否弹出提示授权的底部窗口，
   * 目前只在本人信息这一块设置了提示，就诊人管理 我的预约 意见反馈 这三个功能还没有完善
   */
  data: {
    usrLogin: app.globalData.usrLogin,
    show: false
  },

  showPopup() {
    this.setData({
       show: true 
    });
  },

  onClose() {
    this.setData({ show: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "我的"
    }),
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#1E90FF',
    })
  },
  getProfile(res){
    this.setData({
      "profile": res.detail.userInfo,
      usrLogin: 1
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
    this.getTabBar().init();
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