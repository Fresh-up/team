/*technician.js*/

//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')
var util = require('../../utils/util')
Page({
 // 页面初始数据
 data: {
  colors:['red','orange','yellow','green','purple'],
   
// nav 初始化
navTopItems: fileData.getIndexNavData(),
navSectionItems: fileData.getIndexNavSectionData(),
curNavId: 1,
curIndex: 0
},
  onLoad:function(){
    var that = this
    that.setData({
      list: that.data.skillData
    })
  },
  
})
