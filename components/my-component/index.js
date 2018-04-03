Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  externalClasses: ['component-class'],
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value'
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () {},
    handleTap(e) {
      console.info('**********handleTap*********')
      this.triggerEvent('myevent', {a: 1, b: 2}, e)
    }
  },
  created() {
    console.info('=====component creaed=====')
  },
  attached() {
    console.info('=====component attached=====')
  },
  ready() {
    console.info('=====component ready=====')
  }
})
