// pages/new/new.js
var wxNotificationCenter = require("../../utils/WxNotificationCenter.js");

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    diary: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var diaries = wx.getStorageSync('diaries') ? wx.getStorageSync('diaries') : app.globalData.diaries;
    if(options.id){
      this.setData({diary: diaries[options.id]})
    }
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
    var diaries = wx.getStorageSync('diaries') ? wx.getStorageSync('diaries') : app.globalData.diaries;
    var index = this.data.diary.id;
    diaries[index] = this.data.diary;
    wx.setStorageSync('diaries', diaries);
    wxNotificationCenter.postNotificationName("diariesChangeNotification");
    console.log('wxNotification has been posted!');
    //console.log(diaries);
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

  },

  /**
   * 响应用户输入事件
   */
  changeContent: function (e) {
    var diaries = wx.getStorageSync('diaries') ? wx.getStorageSync('diaries') : app.globalData.diaries;
    var id = this.data.diary.id ? this.data.diary.id : diaries.length;
    var temp = {
      id: id,
      content: e.detail.value,
      date: this.formatDate(),
    };
    this.setData({diary: temp});
    console.log(this.data.diary);
  },

  /**
   * 格式化修改时间 
   */
  formatDate: function () {
    var changeDate = new Date();
    return changeDate.getFullYear() + '.' + (changeDate.getMonth() + 1) + '.' + changeDate.getDate();
  }
})