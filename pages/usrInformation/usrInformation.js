// pages/permana/usrInfomation/usrInformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,  //判断是否按下确定按钮
    name: '',
    phonenum: '',
  },
  // 获取输入的姓名
  changeName:function(e){
    this.setData({
      name:e.detail
    });
  },
  // 获取输入的电话号码，但是在用户输入速度较快的情况下可能出现延迟，还有优化空间。
  changePhone:function(e){
    this.setData({
      phonenum:e.detail
    });
  },

  getProfile(e){
    this.setData({
      flag: 1,
    })
  },

  backTo(e){
    this.setData({
      flag: 0,
    })
  },

  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    this.setData({ [e.currentTarget.dataset.prop]: e.detail })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "本人信息"
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