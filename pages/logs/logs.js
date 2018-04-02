//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    title: '日志信息',
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },

  onReady(){
    
  },

  onShow(){
    wx.setNavigationBarTitle('change title again')
  },

  onPullDownRefresh() {
    console.info('****onPullDownRefresh*****')
  },

  onReachBottom(){
    console.info('****onReachBottom*****')
  },

  onShareAppMessage(){
    
  }

  // ,onPageScroll(){
  //   console.info('****onPageScroll*****')
  // }
})
