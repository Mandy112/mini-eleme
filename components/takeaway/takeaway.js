// components/takeaway.js
const app = getApp()
var allshops=require('../../service/allshop.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    shops:[],
    modalHidden: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    modalChange: function (e) {
      this.setData({
        modalHidden: !this.data.modalHidden
      })
    }
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      this.setData({
        shops:allshops.allshop
      });
      console.log(this.data.shops);
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
