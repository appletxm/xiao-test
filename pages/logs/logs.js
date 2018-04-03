// logs.js
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

    console.info('****onLoad*****')
  },

  onReady() {
    console.info('****onReady*****')
  },

  onShow() {
    wx.setNavigationBarTitle('change title again')
    console.info('****onShow*****')
  },

  onPullDownRefresh() {
    console.info('****onPullDownRefresh*****')
  },

  onReachBottom() {
    console.info('****onReachBottom*****')
  },

  onShareAppMessage() {
    console.info('****onShareAppMessage*****')
    return {
      title: 'my identified share title',
      path: 'http://www.baidu.com'
    }
  },

  onPageScroll() {
    console.info('****onPageScroll*****')
  },

  onTabItemTap() {
    console.info('****onTabItemTap*****')
  }
})
