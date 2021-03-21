// pages/operation/datail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectShow1: false,//控制下拉列表的显示隐藏，false隐藏、true显示，1-5分别代表从上至下的5个下拉框
    selectShow2: false,
    selectShow3: false,
    selectShow4: false,
    selectShow5: false,
    selectData1: ['左眼','右眼','双眼'],
    selectData2: ['是','否'],//下拉列表的数据
    selectData3: ['否','眼底检查','球注','激光','冷冻'],
    selectData4: ['8:00-9:00','9:00-10:00','10:00-11:00'],
    selectData5: ['到院支付'],
    index1: 0,//选择的下拉列表下标
    index2: 0,
    index3: 0,
    index4: 0,
    index5: 0,
    phonevalue: '',
  },

  selectTap1() {
    this.setData({
      selectShow1: !this.data.selectShow1
    });
  },

  optionTap1(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index1: Index,
      selectShow1: !this.data.selectShow1
    });
  },

  selectTap2() {
    this.setData({
      selectShow2: !this.data.selectShow2
    });
  },
  
  optionTap2(e) {
     let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index2: Index,
      selectShow2: !this.data.selectShow2
    });
  },

  selectTap3() {
    this.setData({
      selectShow3: !this.data.selectShow3
    });
  },
  
  optionTap3(e) {
     let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index3: Index,
      selectShow3: !this.data.selectShow3
    });
  },

  selectTap4() {
    this.setData({
      selectShow4: !this.data.selectShow4
    });
  },
  
  optionTap4(e) {
     let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index4: Index,
      selectShow4: !this.data.selectShow4
    });
  },

  selectTap5() {
    this.setData({
      selectShow5: !this.data.selectShow5
    });
  },
  
  optionTap5(e) {
     let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index5: Index,
      selectShow5: !this.data.selectShow5
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "预约详情"
    })
  },

  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
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