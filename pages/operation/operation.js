// pages/operation/operation.js
Page({

  /**
   * 设置了页面的初始数据
   * cell1、2、3、4分别代表了4个时间段，
   * 下面的onCell函数通过0、1信号量的控制改变来实现各个时间段的来回切换功能
   */
  data: {
    cell1: 1,
    cell2: 0,
    cell3: 0,
    cell4: 0,
    docName: 'X',
    total: 100,
    remain: 10,
  },

  onCell1(e){
    this.setData({
      cell1: 1,
      cell2: 0,
      cell3: 0,
      cell4: 0
    })
  },

  onCell2(e){
    this.setData({
      cell1: 0,
      cell2: 1,
      cell3: 0,
      cell4: 0
    })
  },

  onCell3(e){
    this.setData({
      cell1: 0,
      cell2: 0,
      cell3: 1,
      cell4: 0
    })
  },

  onCell4(e){
    this.setData({
      cell1: 0,
      cell2: 0,
      cell3: 0,
      cell4: 1
    })
  },
// 跳转到预约详情
  toDetail(e){
    wx.navigateTo({
      url: '/pages/operation/detail/detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "预约手术"
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