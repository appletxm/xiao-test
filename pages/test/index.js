// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    text: 'init data',
    num: 0,
    array: [
      {text: 'init data'}
    ],
    object: {
      text: 'init data'
    },
    className: 'red-panel',
    objectArray: [
      {id: 5, unique: 'unique_5'},
      {id: 4, unique: 'unique_4'},
      {id: 3, unique: 'unique_3'},
      {id: 2, unique: 'unique_2'},
      {id: 1, unique: 'unique_1'},
      {id: 0, unique: 'unique_0'}
    ],
    numberArray: [1, 2, 3, 4]
  },
  changeText(e) {
    this.setData({
      text: 'changed data'
    })
  },
  changeNum() {
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray() {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text': 'changed data'
    })
  },
  changeItemInObject() {
    this.setData({
      'object.text': 'changed data'
    })
  },
  addNewField() {
    this.setData({
      'newField.text': 'new data'
    })
  },
  changeStyle() {
    let className

    className = this.data.className === 'red-panel' ? 'purple-panel' : 'red-panel'
    this.setData({className})
  },
  onMyEvent(e) {
    console.info('=========onMyEvent========', e)
    wx.showModal({
      success: function (res) {
        if (wx.canIUse('showModal.cancel')) {
          console.log(res.cancel)
        }
      }
    })
  },
  onLoad() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
      }
    })
  },
  onShow() {
    console.info('==', this.route, getCurrentPages())
  }
})
