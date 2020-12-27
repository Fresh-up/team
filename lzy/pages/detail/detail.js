var app = getApp()
var myData = require("../../utils/data")
Page( {
  data: {bookToastHidden:true
  },
  onLoad: function (options) {
    this.setData({
      artype:options.artype
    })    
  },
  getLocation:function(){
    wx.navigateTo({
      url:'../location/location'
    })
  },
  bindToastTap:function(){
    console.log('预定成功')
    this.setData({
        bookToastHidden:false
    })
},
  hideToast:function(){
    this.setData({
        bookToastHidden:true
    })
},
})