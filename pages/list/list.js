// pages/list/list.js
var wxNotificationCenter = require("../../utils/WxNotificationCenter.js");

var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    diaries: [],
    src: '../../res/add.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(wx.getStorageSync('diaries')){
      this.setData({diaries: wx.getStorageSync('diaries')})
    } else {
      this.setData({diaries: app.globalData.diaries})
    }
    //添加日记数组改变通知
    wxNotificationCenter.addNotification("diariesChangeNotification", this.diariesChangeNotificationHandler, this)
  },

  //接收日记数组改变的通知，重新处理
  diariesChangeNotificationHandler: function () {
    this.setData({
      diaries: wx.getStorageSync('diaries')
    });
    console.log('wxNotification has been called!');
    console.log(this.data.diaries);
  },

  /**
   * 生命期函数--监听页面初次渲染完成
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
  
  },

  /**
   * 跳转至详情页，并显示日记详情
   */
  showDetail: function (e) {
    console.log(e);
    var id = e.currentTarget.dataset.id;
    var url = "../content/content?id=" +id;
    console.log(url);
    wx.navigateTo({
      url: url,
      success: function () {

      },
      fail: function () {

      },
      complete: function () {

      }
    })
  },

  /**
   * 新建日记
   */
  newDiary: function () {
    wx.navigateTo({
      url: '../content/content',
      success: function () {

      },
      fail: function () {

      },
      complete: function () {

      }
    })
  },

  /**
   *翻转数组 
   */
  //getReversedDiaries: function(diaries) {
  //  console.log('翻转之前的数组：');
  //  console.log(diaries);
  //  var temp = diaries;
  //  console.log('翻转之后的数组：');
  //  console.log(temp);
  //  return temp.reverse();
  //}
})