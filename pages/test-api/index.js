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
  onLoad() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
      }
    })

    console.info('===========1==========')

    // let info = wx.request({
    //   url: '../../data/user.json',
    //   data: {
    //     id: '0001'
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function(res) {
    //     console.info('===========2=========')
    //     console.log(res.data)
    //   }
    // })
  },
  onShow() {
    console.info('==', this.route, getCurrentPages())
  },

  showImage(imgs){
    console.info(imgs)
    wx.previewImage({
      current: imgs[1],
      urls: imgs,
      success(){
        console.info('******showImage****')
      }
    })
  },

  chooseImage(){
    let self = this

    wx.chooseImage({
      count: 3, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        self.showImage(tempFilePaths)
      }
    })
  },

  getLocaltion(){
    console.info('=====getLocaltion=====')
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        console.info('**getLocation**', res)
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
      }
    })
  },

  chooseLocaltion(){
    console.info('=====chooseLocaltion=====')
    wx.chooseLocation({
      success: function(res) {
        console.info('**chooseLocaltion**', res)
      }
    })
  }
})
