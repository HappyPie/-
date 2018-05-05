//app.js

App({
  /**
   * 全局数据
   */
  globalData: {
    diaries: [{
      id: 0,
      content: 'weapp for fun, do not use it to record important information.',
      date: '2018.05.05'
    }, {
      id: 1,
      content: 'if you have any good idea,thank you for helping me to improve it in advance.',
      date: '2018.05.05'
    }, {
      id: 2,
      content: 'please feel free to contact me： 2257171298@qq.com.',
      date: '2018.05.05'
    }]
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
