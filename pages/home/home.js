// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        name:"hello",
        // 轮播图，图片链接
        movies:[  
          {url:'https://w.wallhaven.cc/full/ox/wallhaven-oxzk8m.jpg'} ,  
          {url:'https://w.wallhaven.cc/full/g8/wallhaven-g83m3d.jpg'} ,  
          {url:'https://w.wallhaven.cc/full/xl/wallhaven-xlx8ez.png'} ,  
          {url:'https://w.wallhaven.cc/full/83/wallhaven-83235k.png'}   
          ],
        active: 0
  },

  onChange(event) {

  },
  /**
   * 生命周期函数--监听页面加载
   * 顶部标签文字
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "首页"
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  onShow: function () {
    this.getTabBar().init();
  },

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