// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'this is button page',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userList: []
  },
  // 事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '/components/my-component/index'
    })
  },
  onLoad: function () {},
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
