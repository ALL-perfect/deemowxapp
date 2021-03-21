// pages/mom/mom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    pro: '',
    state1: '',
    state2: '',
    time: '',
    // 两个下拉框的下标
    index1: 0,
    index2: 0,
    // 备孕期液晶屏时间
    selectData1: ['1','2','3','4','5','6','7','8','9','10','11',
    '12','13','14','15','16','17','18','19','20','21','22','23','24'],
    // 怀孕期液晶屏时间
    selectData2: ['1','2','3','4','5','6','7','8','9','10','11',
    '12','13','14','15','16','17','18','19','20','21','22','23','24'],
    alter: 0,
  },
// 点击下拉框事件
  selectTap1() {
    console.log(this.data.selectShow1);
    this.setData({
      selectShow1: !this.data.selectShow1
    });
  },
// 下拉框选项选择，index决定最后显示的值
  optionTap1(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    console.log(Index);
    this.setData({
      index1: Index,
      selectShow1: !this.data.selectShow1
    });
  },

  selectTap2() {
    console.log(this.data.selectShow2);
    this.setData({
      selectShow2: !this.data.selectShow2
    });
  },

  optionTap2(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    console.log(Index);
    this.setData({
      index2: Index,
      selectShow2: !this.data.selectShow2
    });
  },


  changeName:function(e){
    this.setData({
      name:e.detail
    });
  },

  changePro:function(e){
    this.setData({
      pro:e.detail
    });
  },

  changeState1:function(e){
    this.setData({
      state1:e.detail
    });
  },

  changeState2:function(e){
    this.setData({
      state2:e.detail
    });
  },

  changeTime:function(e){
    this.setData({
      time:e.detail
    });
  },
// 提交表单数据，生成结果
  submit(e){
    this.setData({
      alter: 1,
    });
  },
// 返回修改表单数据
  edit(e){
    this.setData({
      alter: 0,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "母亲数据"
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